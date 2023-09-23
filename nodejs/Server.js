const http=require("http")
const data=require("./data")
http.createServer((req,resp)=>{
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(5000)