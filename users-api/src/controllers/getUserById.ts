//Desc creating a user
//@POST /api/v/users
//@Access Public

import asyncHandler from "../middlewares/async";
import { IdFunction, UserFunction, UserRequest } from "../types/user";

const createGetUserById =  (getUserById:IdFunction) =>{
    return asyncHandler(async (req:UserRequest,res,next)=>{
        const result = await getUserById(req.params.id||"",next);
        res.status(200).json(result);
    });
}

export default createGetUserById;