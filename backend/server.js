const express=require('express')
const users=require("./user.json")
const app=express();
const PORT=8899;

app.get("/users",(request,response)=>{
    return response.json(users)
})
app.get("/users/:id",(request,response)=>{
    const id=Number(request.params.id);
    const user=users.find((user)=>user.id===id);
    return response.json(user);
})

app.listen(PORT, ()=>{
    console.log(`My Server is running on ${PORT} number`)
})