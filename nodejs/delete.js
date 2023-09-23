


const connectdb=require("./mongodb")
async function deleteOne()
{
    let db=await connectdb()
    let data=await db.deleteOne({rollno:102})
    console.log(data);
    if(data.acknowledged==true)
    {
        console.log("data delete successfully");
    }
}
deleteOne();
