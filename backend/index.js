const express=require("express");
const {createTodo,updateTodo}=require("./type");
const app=express();

app.use(express.json());


app.post("/todo",function(req,res){
       const createPayload=req.body;
       const paresedPayload=createTodo.safeParse(createPayload);
       if(!paresedPayload.success){
           res.status(411).json({
            msg:"you sen this wrong inputs",
           })
           return;
       }
         
    })

app.put("/completed",function(req,res){
       const updatePayload=req.body;
       const paresedPayload=updateTodo.safeParse(updatePayload);
        if(!paresedPayload.success){
           res.status(411).json({
            msg:"you sen this wrong inputs",
           })
           return;
       }
})

app.get("/todos",function(req,res){

})


