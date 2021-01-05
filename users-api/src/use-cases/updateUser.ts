import { User, UserFunction } from "../types/user";
import {Db} from '../data-access';
import ErrorResponse from "../utils/ErrorResonse";
import { NextFunction } from "express";




const makeUpdateUser = (db:Db)=>{
    const update:UserFunction=async(user:User,next:NextFunction)=>{
       const updatedUser=  await db.findByIdAndUpdate(user);
        if(!updatedUser){
            
            return {success:false,data:null,error:new ErrorResponse(400,"User not found")};
        }
       return {success:true,data:updatedUser};
    }
    return update;
}   



export default makeUpdateUser;
