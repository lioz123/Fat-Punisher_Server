import { IdFunction, User } from "../types/user";
import {Db} from '../data-access';




const makeGetUserById = (db:Db)=>{
    const getUserById:IdFunction= async(id)=>{
        const user = await db.findById(id);
        return  {success:true,data:user};    
    }
    return getUserById;
}

export default makeGetUserById;
