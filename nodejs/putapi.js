const express=require("express")
const app=express()
const connectdb=require("./mongodb")
app.get("/",async(req,resp)=>
{
    let db=await connectdb()
    // let data =await db.updateOne({rollno:135},{$set:{name:"genelia",marks:100}})
    let data=await db.updateMany({rollno:114},{$set:{name:"Tony Kakkar"}})
    console.log(data);
    if(data.acknowledged==true)
    {
       resp.send("save data successfully")
    }

})

app.listen(4000)