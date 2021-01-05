import { NextFunction ,Response,Request} from "express";
import {MongoError} from 'mongodb';
import {  MiddleWareFunction } from "../types/user";
import ErrorResponse from "../utils/ErrorResonse";
import logger from '../utils/log';

const ErrorHandler=(err:Error,req:Request,res:Response,next:NextFunction) => {

    let error = getErrorResponse(err);

    
 
    logger.debug(`Error:${err.name}`,err);
    return res.status(error.status).json({success:false,data:error.message});
    
}

const getErrorResponse = (err:Error):ErrorResponse=>{
    if(err instanceof ErrorResponse){
        return err as ErrorResponse;
    }

    if(err.name==="ValidationError"){
        return new ErrorResponse(400,err.message);
    }

    if(err instanceof MongoError){
        switch((err as MongoError).code){
            case 11000:
                return new ErrorResponse(400,"A user with the same credentials is already existed");
            
            default:
                break;
            }
    }


    return new ErrorResponse(500,"Server Error Please Try Again");

}



export default ErrorHandler;