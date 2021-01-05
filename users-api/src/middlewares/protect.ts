import { Db } from "../data-access";
import { MiddleWareFunction } from "../types/user";
import { VerifyToken } from "../use-cases";
import ErrorResponse from "../utils/ErrorResonse";

const buildProtect = (verifyToken:VerifyToken,db:Db)=>{
    const protect:MiddleWareFunction=async (req,res,next)=>{
        const result = verifyToken(req);
        if(result.error){
            return next(result.error);
        }

        if(result.decodedToken){
            const id = result.decodedToken.id;
            const user =await  db.findById(id);
            if(user){
                req.user = user;
                next();
            }
        }
        return next(new ErrorResponse(404,"unauthorized"));

    }
    return protect;
}
export default buildProtect;