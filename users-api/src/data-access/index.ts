import UserModule from '../Modules/UserModule';
import mongoose from 'mongoose';
import { MONGO_URL } from '../config';
import createDataBaseAdapter,{Db} from './database_adapter';

import bcrypt from 'bcrypt';

const createDB = ()=>{
    if(!mongoose.connection.readyState){
        mongoose.set('useCreateIndex',true);
        mongoose.connect(MONGO_URL,{useUnifiedTopology:true,useNewUrlParser:true});
    }

    return createDataBaseAdapter();
};

export const encrypt =async (password:string) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

export {Db,createDB};
