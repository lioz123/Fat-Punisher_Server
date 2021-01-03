import { NextFunction,Request,Response } from "express";
import { Tracing } from "trace_events";
type MiddlewareFunction = (req:Request,res:Response, next:NextFunction) =>void;

const AsyncHanlder = (fn:MiddlewareFunction) => (req:Request,res:Response,next:NextFunction)=>{
 Promise.resolve(fn(req,res,next)).catch(next);  
}

export default AsyncHanlder
