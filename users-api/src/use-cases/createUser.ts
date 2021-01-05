import { User ,UserFunction} from "../types/user";
import {Db} from '../data-access';
import { token } from "morgan";

  const makeCreateUser = (db:Db,genToken:(id:string)=>string)=>{
    const createUser:UserFunction = async(user:User)=>{
            const createdUser=  await  db.create(user); 
          // for some reson it returns the user with the password, so this is just in case I will want to return the user in the future.
            if(createdUser){
                createdUser.password= undefined;
              }

          const token = genToken(createdUser?._id);

            return  {success:true,data:createdUser,token};  

    }
    return createUser;
}

export default makeCreateUser;