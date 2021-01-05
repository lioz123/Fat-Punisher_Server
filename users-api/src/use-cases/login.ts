import { User ,UserFunction} from "../types/user";
import {Db} from '../data-access';
import { token } from "morgan";
import ErrorResponse from "../utils/ErrorResonse";

  const makeCreateUser = (db:Db,genToken:(id:string)=>string)=>{
    const login:UserFunction = async(user:User)=>{
            const foundUser=await  db.findOne({email:user.email});
          // for some reson it returns the user with the password, so this is just in case I will want to return the user in the future.
            if(!foundUser||foundUser.password!==user.password){
                return {success:false,data:null,error:new ErrorResponse(403,"Unauthorized")};
              }

           
              const token = genToken(foundUser?._id);
              
              if(!token){
                return {success:false,data:null,error:new ErrorResponse(403,"Unauthorized")};
              }
        
               foundUser.password=undefined;
              return {success:true,data:foundUser,token};

    }
    return login;
}

export default makeCreateUser;