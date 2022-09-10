const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("public"))

const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname,"/public/index.html");
})

app.get("/api/whoami",(req,res)=>{req.socket?.remoteAddress
    // console.log(req.connection);
    console.log(req.socket?.remoteAddress);
    res.json({ipaddress:req.socket?.remoteAddress,language:req.headers["accept-language"],
    software:req.headers["user-agent"]})
})

app.listen(port,()=>{
    console.log(`this post is listen ${port}`)
})