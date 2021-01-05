import { NextFunction, Request, Response } from "express";
import { Mongoose } from "mongoose";
import { IUser } from "../Modules/UserModule";



interface User {
    email?: string;
    lastname?: string;
    firstname?: string;
    weight?:number;
    height?:number;
    password?:string;
    userID?:string;
    role?:"admin"|"user";
}

interface UserRequest extends Request{
    user?:User;

}

interface Result{
    success:boolean;
    data:IUser | null| IUser[] | string;
    error?:Error;
    decodedToken?:{
        id:string;
    };
}
type UserFunction = (user:User,next:NextFunction)=>Promise<Result>;

type IdFunction = (id:string,next:NextFunction)=>Promise<Result>;
type MiddleWareFunction = (req:UserRequest,res:Response,next:NextFunction)=>void;

export  {User,UserRequest,MiddleWareFunction,IdFunction,UserFunction,Result};