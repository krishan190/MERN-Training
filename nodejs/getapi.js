const express=require("express")
const app=express()
const connectdb=require("./mongodb")
app.get("/",async (req,resp)=>{
    let db=await connectdb()
    let data=await db.find().toArray()
    console.log(data);
    resp.send(data);
})

app.listen(4000);