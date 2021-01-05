//Desc creating a user
//@POST /api/v/users
//@Access Public

import asyncHandler from "../middlewares/async";
import { UserFunction, UserRequest } from "../types/user";

const createCreateUser =  (createUser:UserFunction) =>{
    return asyncHandler(async (req:UserRequest,res,next)=>{
        const result = await createUser(req.body,next);
        res.status(201).json(result);
    });
}

export default createCreateUser;