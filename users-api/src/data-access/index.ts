import UserModule from '../Modules/UserModule';
import mongoose from 'mongoose';
import { MONGO_URL } from '../config';
import createDataBaseAdapter from './database_adapter';
import crypto from 'crypto';
import ErrorResponse from '../utils/ErrorResonse';
import bcrypt from 'bcrypt';
import log from '../utils/log';
const createDB = ()=>{
    if(!mongoose.connection.readyState){
        mongoose.set('useCreateIndex',true);
        mongoose.connect(MONGO_URL,{useUnifiedTopology:true,useNewUrlParser:true});
    }

    return createDataBaseAdapter("User");
};

const encrypt =async (password:string) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}


export default createDB;