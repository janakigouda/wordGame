const {Router}=require("express");
const users=require("./user.module");

const usersRoute=Router();

usersRoute.post("/",async(req,res)=>{
    try{
        let userData=await users.create(req.body);
        res.send(`${userData} - user inserted successfullt`)
    }catch(e){
        res.status(500).send(e.message);
    }
})

usersRoute.get("/",async(req,res)=>{
    try{
        let userData=await users.find();
        res.send(userData)
    }catch(e){
        res.status(500).send(e.message);
    }
});

usersRoute.get("/:id",async(req,res)=>{
    try{
        let userData=await users.findById(req.params.id);
        res.send(userData)
    }catch(e){
        res.status(500).send(e.message);
    }
})

usersRoute.patch("/:id",(req,res)=>{
    try{
        users.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((users)=>{
            if(!users){
                return res.status(404).send();
            }
            res.send(users);
        })
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports=usersRoute;