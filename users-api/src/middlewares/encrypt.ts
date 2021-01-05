import { MiddleWareFunction } from "../types/user";
import {encrypt} from '../use-cases/'
const encryptHandler :MiddleWareFunction = async(req,res,next)=>{
    if(req.body.password){
        req.body.password =  await encrypt(req.body.password);
    }
    next();
}

export default encryptHandler;