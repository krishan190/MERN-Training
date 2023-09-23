const express=require("express")
const app=express()
const connectdb=require("./mongodb1")
app.get("/",async (req,resp)=>{
    resp.header("Access-Control-Allow-Origin","*")
    let db=await connectdb()
    let data=await db.find().toArray()
    console.log(data);
    resp.send(data);
})
app.listen(5000)