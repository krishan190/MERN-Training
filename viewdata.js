const connectdb=require("./mongodb")
async function viewdata()
{
    let db=await connectdb()
    let data =await db.find().toArray()
    console.log(data);

}
viewdata()