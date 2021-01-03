import mongoose, { model } from 'mongoose';
import UserModule from '../Modules/UserModule';
import { User } from '../types/user';
import logger from '../utils/log';
const createDataBaseAdapter =(moduleName:string)=>{
    const module = mongoose.model(moduleName);
    
    const findById =async(id:string)=>{
        return  await module.findById(id);
    }
    const find =async(user:User)=>{
        return await module.find(user);
    }

    const findByIdAndUpdate=async(user:User)=>{
        return await module.findByIdAndUpdate(user.userID,user);
    }

    const remove =async(id:string)=>{
        return await module.remove(id);
    }
    const create = async(user:User)=>{
        switch(moduleName){
            case "User":
                return await UserModule.create({...user,role:"user"});
            default:
                return null;
        }
    }
  
    return Object.freeze({
        findById,
        find,
        remove,
        findByIdAndUpdate,
        create,
    });
}



export default createDataBaseAdapter;
