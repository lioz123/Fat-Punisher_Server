import mongoose, { model } from 'mongoose';
import UserModule, { IUser } from '../Modules/UserModule';
import { User } from '../types/user';
import logger from '../utils/log';

export interface Db {
         findOne:(object:any,selectPassword?:boolean)=>Promise<IUser>|null;
         findById :(id:string)=>Promise<IUser>|null;
         find: ()=>Promise<IUser>|null;
         findByIdAndUpdate: (user:User)=>Promise<IUser>|null;
         remove :(id:string)=>Promise<IUser>|null;
         create: (user:User)=>Promise<IUser>|null;
}
const createDataBaseAdapter =()=>{

    const module = mongoose.model("User");
    
    const findById =async(id:string)=>{
        return   module.findById(id);
    }
    const find =async()=>{
        return  module.find();
    }

    const findByIdAndUpdate=async(user:User)=>{
        return  module.findByIdAndUpdate(user.userID,user,{useFindAndModify:false,new:true,runValidators:true});
    }

    const remove =async(id:string)=>{
        return  module.remove(id);
    }
    const create = async(user:User)=>{
        return  UserModule.create({...user,role:"user"});
    }
    const findOne = async (email:string,selectPassword?:boolean)=>{
        if(selectPassword){
            return UserModule.findOne({email}).select("+password");
        }
        return UserModule.findOne({email});
    }
    const db:Db ={
            findById,
            find,
            remove,
            findByIdAndUpdate,
            create,
            findOne
        }
    
    return Object.freeze(db);
}



export default createDataBaseAdapter;
