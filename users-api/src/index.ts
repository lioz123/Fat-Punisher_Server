
import {MONGO_URL, PORT} from './config';
import express from 'express';
import {log} from './utils';
import bodyParser from 'body-parser';


import userRouter from './routes/user';
import morgan from 'morgan';
import { encryptHandler,errorHandler} from './middlewares';


console.log(`mongo url:${MONGO_URL}`);

const app = express();

app.use(morgan('short'));

app.use(bodyParser.json());

app.use(encryptHandler);
app.use("/users/api/v1/",userRouter);


app.use(errorHandler);

app.listen(PORT,()=>{
 log.debug(`User-Api listening on port:${PORT}`);
});

