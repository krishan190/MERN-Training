const mongoose=require("mongoose")
async function main()
{
    await mongoose.connect("mongodb://0.0.0.0:27017/School")
    const studentschema=new mongoose.Schema({
        rollno:Number,
        name:String
    });
    const studentmodel=mongoose.model("student",studentschema)
    const data=new studentmodel({rollno:156,name:"krishna"})
    const result=await data.save()
    console.log(result);
}
main()