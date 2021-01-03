import { NextFunction, Request, Response } from "express";



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

interface UserRequest extends User,Request{

}


type MiddleWareFunction = (req:UserRequest,res:Response,next:NextFunction)=>void;
export  {User,UserRequest,MiddleWareFunction};