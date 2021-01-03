import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});


const PORT = process.env.PORT
const NODE_ENV=process.env.NODE_ENV;
const MONGO_URL=process.env.MONGO_URL||"";
export {PORT,NODE_ENV,MONGO_URL};