import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";


 const Connection = async(username,password) =>{
    
    const URL = `mongodb+srv://${username}:${password}@onboarding-db.c1lqafx.mongodb.net/?retryWrites=true&w=majority`;
    try {
       
        await mongoose.connect(URL,{useNewURLParser:true});
        console.log('Database connected successfully');

    }
    catch(error){
        console.log('Error while connecting with the database',error)
    }
}
export default Connection;   