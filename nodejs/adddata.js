const connectdb=require("./mongodb")
async function adddata()
{
    let db=await connectdb()
    let data =await db.insertMany([{rollno:135,name:"Urfi Javed",marks:88},{rollno:123,name:"rashmika",marks:33}])
    console.log(data);
    if(data.acknowledged==true)
    {
        console.log("data inserted successfully");
    }

}
adddata()