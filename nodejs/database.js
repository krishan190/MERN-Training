const{MongoClient}=require("mongodb")
const url="mongodb://0.0.0.0:27017"
const database="School"
const client = new MongoClient(url)
async function datadb()
{
    let result=await client.connect()
    let db=result.db(database)
    let collection=db.collection("student")
    let data=await  collection.find({rollno:114}).toArray();
    console.log(data);
}

datadb();