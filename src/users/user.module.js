const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    difficultyLevel:{type:String},
    score:{type:Number,default:0}
},
{
    timestamps:true
});

const users=mongoose.model("user",userSchema);

module.exports=users;