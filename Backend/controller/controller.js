import { response } from "express";
import User from "../model/user-schema.js"

export const UserSignup = async(request,response)=>{
 try{
  const exist = await User.findOne({name:request.body.name});
  if(exist){
    return response.status(401).json({message:'user already exist'});
  }
  const user = request.body;
  const newUser = new User(user);
  await newUser.save();
  response.status(200).json({msg:'successfully saved data'})
 }
 catch(error){
 response.status(500).json({message:error.message});
 }
}

export const getProds = async (request,response)=>{
 let prod = await User.find();
 if(prod.length>0){
  response.send(prod);
 }
}