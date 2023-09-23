const connectdb=require("./mongodb")
async function update()
{
    let db=await connectdb()
    let data=await db.updateMany({rollno:102},{$set:{name:"Ram"}})
    if(data.acknowledged==true)
    {
        console.log("data update successfully");
    }
}
update();