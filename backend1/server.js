const express=require('express')
const dotEnv=require('dotenv')
const mongoClient=require('mongoose')
const app=express();
const PORT=8899
dotEnv.config();

mongoClient.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("we connected to MOngoDB atlas account")
    }
).catch((err)=>{
    console.log(err);
})
app.listen(PORT,()=>{
    console.log(`my server is running on ${PORT} number`)
})