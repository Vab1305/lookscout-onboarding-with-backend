import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';

import express from 'express';
import Connection from './database/db.js';
import router from './routes/routes.js';
  

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

const PORT = 8000;


app.listen(PORT,()=>console.log('server is running'));
    
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
  
Connection(USERNAME,PASSWORD);

   
 