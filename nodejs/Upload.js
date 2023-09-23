const multer=require("multer")
const express=require("express")
const app=express()
const Upload=multer({

    storage:multer.diskStorage({
        destination:function(req,resp,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.originalname)
        }
    })
}).single("user_file")
app.post("/Upload",Upload,(req,resp)=>{
    resp.send("upload file")
})
app.listen(5000)