const express=require("express")
const cors=require("cors")
const app=express()
const connectdb=require("./mongodb1")
app.use(express.json())
app.use(cors());

app.post("/",async (req,resp)=>{
    resp.header("Access-Control-Allow-Origin","*")
    let db=await connectdb()
    let data=await db.insertOne(req.body)
    console.log(data);
    resp.send(data);
})
app.listen(1000)