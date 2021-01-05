import {createDB} from '../data-access';
import makeCreateUser from './createUser';
import makeGetUserById from './getUserById';
import makeGetUsers from './getUsers';
import makeUpdateUser from './updateUser';
import bcrypt from 'bcrypt';
import log from '../utils/log';
import jwt,{} from 'jsonwebtoken';
import { JSON_WEB_TOKEN_SECRET } from '../config';
import { resolve } from 'path';
import { Request } from 'express';
import { Result } from '../types/user';
import ErrorResponse from '../utils/ErrorResonse';
const encrypt = async(password:string)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        log.debug(`password is:${password}`);
        const hash =await bcrypt.hash(password.toString(),salt);
        log.debug(`Hash is :${hash}`);
        return hash;

    }catch(err){
        log.error(`Error:`,err);
    }
    return ""    
}

const genToken =(id:string)=>{
    log.debug("gen token was called");
    const token = jwt.sign({id},JSON_WEB_TOKEN_SECRET,{expiresIn:60*60*24});
    log.debug(`generated token:${token}`);
    return token;
}

export type VerifyToken = (req:Request) =>Result;

const verifyToken:VerifyToken =(req:Request)=>{
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader&&bearerHeader.split(' ').length===2){
        try{
            const token = bearerHeader.split(' ')[1];
            const decoded = <any>jwt.verify(token,JSON_WEB_TOKEN_SECRET);
            log.debug('decoded token is:',decoded);
            return {success:true,data:decoded};
        }catch(err){
            return {success:false,data:null,error: new ErrorResponse(403, "unauthorized")}
        }
     
    }
    return {success:false,data:null,error: new ErrorResponse(403, "unauthorized")}


}
const db = createDB();
const createUser = makeCreateUser(db,genToken);
const updateUser = makeUpdateUser(db);
const getUserById = makeGetUserById(db);
const getUsers = makeGetUsers(db);

export {createUser,updateUser,getUserById,getUsers,encrypt,verifyToken};