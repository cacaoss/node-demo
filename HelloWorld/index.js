const axios = require("axios")

axios.get("http://localhost:44828/api/user").then((data)=>{
    console.log("成功",data);
}).catch(err=>{
    console.log("失败",err);
})
