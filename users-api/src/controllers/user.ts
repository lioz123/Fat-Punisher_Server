
// import AsyncHanlder from "../middlewares/AsyncHandler";
// import {User, UserRequest} from "../types/user";
// import ErrorResponse from "../utils/ErrorResonse";
// import logger from '../utils/log';
// import  {createDB, Db } from '../data-access';

    
    
//     //Desc getting a user by id
//     //@GET /api/v/users/:id
//     //@Access Protected owner,Admins
//     const getUserById=AsyncHanlder(async (req,res,next)=>{
//         const db = createDB();
    
//          const id = req.params.id
//          const user = await db.findById(id);
//          if(!user){
//              return next(new ErrorResponse(400,"Not such user"));
//          }
    
//          res.status(400).send({success:true,data:user});
//      });
//     //Desc getMany users
//     //@GET /api/v/users/
//     //@Access Protected Admin
//     const getUsers=AsyncHanlder(async (req,res,next)=>{
    
//         const id = req.params.id
//         const user = await db.findById(id);
//         if(!user){
//             return next(new ErrorResponse(400,"Not such user"));
//         }
    
//         res.status(400).send({success:true,data:user});
//     });
    
    
//     //Desc updateing user 
//     //@PUT /api/v/users/
//     //@Access Protected Owner,Admin
//     const updateUser=AsyncHanlder(async (req,res,next)=>{
//        const user = await db.findByIdAndUpdate(req.body);
//         res.status(400).send({success:true,data:user});
//     });
    
//     return Object.freeze({
//         updateUser,
//         createUser,
//         getUserById,
//         getUsers,
//     });
// }

// export default createControler;

