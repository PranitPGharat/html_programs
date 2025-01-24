const express=require('express')
const dotEnv=require('dotenv')
const mongoClient=require('mongoose')
const bodyParser=require('body-parser')
const employeeRoute=require('./routes/EmployeeRoute')
const app=express();
dotEnv.config();
//middleware
app.use(bodyParser.json());

const PORT=process.env.PORT || 8899;

mongoClient.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB compass connected  successfully");

}).catch((err)=>{
    console.log(err);
})
//middleware
app.use("/employee",employeeRoute);

app.listen(PORT,()=>{
    console.log(`my server is running on port number ${PORT}`);
})