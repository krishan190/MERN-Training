const express=require("express")
const app=express()
const connectdb=require("./mongodb")
app.get("/",async(req,resp)=>
{
    let db=await connectdb()
    // let data =await db.updateOne({rollno:135},{$set:{name:"genelia",marks:100}})
    let data=await db.insertOne({rollno:114,name:"Bholu",marks:90,address:"indore"})
    console.log(data);
    if(data.acknowledged==true)
    {
       resp.send("save data successfully")
    }

})

app.listen(4000)