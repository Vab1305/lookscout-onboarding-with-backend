import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
});

const user = mongoose.model('user',userShema);
export default user;