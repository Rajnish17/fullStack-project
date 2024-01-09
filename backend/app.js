const express =require("express");
const app =express();
const cors =require("cors")
const userRoutes =require("./routes/user.routes")





app.use(cors());
app.use(express.json());
app.use("/user",userRoutes)



app.get("/",(req,res)=>{
    res.send("server is up and running")
})



module.exports =app;