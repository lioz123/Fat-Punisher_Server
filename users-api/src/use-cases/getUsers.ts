import { User } from "../types/user";
import {Db} from '../data-access';




const makeGetUsers = (db:Db)=>{
    return async()=>{
        const user = await db.find();
        return {success:true,data:user};
    }


}

export default makeGetUsers;
