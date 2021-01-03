
import AsyncHanlder from "../middlewares/AsyncHandler";
import {User} from "../types/user";
import ErrorResponse from "../utils/ErrorResonse";
import logger from '../utils/log';
import createDB from '../data-access';
//Desc creating a user
//@POST /api/v/users
//@Access Public
const createUser=AsyncHanlder(async (req,res,next)=>{
    const db = createDB();
    logger.debug("Creating user",req.body);
    const  userParams:User = req.body; 
    const user = await db.create(userParams);
    res.status(400).send({success:true,data:user});
});


//Desc getting a user by id
//@GET /api/v/users/:id
//@Access Protected owner,Admin
const getUserById=AsyncHanlder(async (req,res,next)=>{
    const db = createDB();

     const id = req.params.id
     const user = await db.findById(id);
     if(!user){
         return next(new ErrorResponse(400,"Not such user"));
     }

     res.status(400).send({success:true,data:user});
 });
//Desc getMany users
//@GET /api/v/users/
//@Access Protected Admin
const getUsers=AsyncHanlder(async (req,res,next)=>{
    const db = createDB();

    const id = req.params.id
    const user = await db.findById(id);
    if(!user){
        return next(new ErrorResponse(400,"Not such user"));
    }

    res.status(400).send({success:true,data:user});
});


//Desc updateing user 
//@PUT /api/v/users/
//@Access Protected Owner,Admin
const updateUser=AsyncHanlder(async (req,res,next)=>{
    const db = createDB();

    const  userParams:User = req.body; 
    if(!userParams.userID){
        return next(new ErrorResponse(404,"User not found"));
    }
    let user =await db.findById(userParams.userID);
    if(!user){
        return next(new ErrorResponse(404,"User not found"));
    }
    res.status(400).send({success:true,data:user});
});


export  {createUser,getUserById,getUsers,updateUser};

