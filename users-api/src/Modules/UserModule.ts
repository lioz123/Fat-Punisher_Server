import { NextFunction } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import {User} from '../types/user';
import {encrypt} from '../use-cases';
export interface IUser extends Document,User{
  
}


const userScheme: Schema = new Schema({
  email: { type: String, 
    required: [true,"Please add email"], 
    unique: [true,"This email is already registered"], 
},
firstname: {
       type: String, 
       required: [true,"Please add first name"], 
       minlength:[2,"needs to be at least 6 characters"],
       maxlength:[20,"cant be longer than 20 characters"],
    },

  role:{
    type:String,
    required:[true,"Something went wrong"],
    enum:["user"],
    default:["user"],
  },
  password:{
    type:String,
    required:[true,"Please add password"],
    minlength:[6,"needs to be at least 6 characters"],
    select:false,
    
  },
  lastname: {
       type: String,
     required: [true,"Please add last name"], 
    },
  weight:{
      type:Number,
    },
    height:{
        type:Number,
      },
});


userScheme.methods.getBmi = function getBmi():number{
  if(this.height&&this.weight){
    const height = Number(this.height);
    const weight = Number(this.weight);
    return weight/(height*height);
  }
  return -1;
}
// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', userScheme);