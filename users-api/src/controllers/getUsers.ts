//Desc creating a user
//@POST /api/v/users
//@Access Public

import asyncHandler from "../middlewares/async";
import { IdFunction, Result, UserFunction, UserRequest } from "../types/user";

const createGetMany =  (find: ()=>Promise<Result>) =>{
    return asyncHandler(async (req:UserRequest,res,next)=>{
        const result = await find();
        res.status(200).json(result);
    });
}

export default createGetMany;