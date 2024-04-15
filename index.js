import express from "express"
const app=express()
app.get("/",(req,res)=>{
    res.send("<h1>this is get method</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>this is get abot method</h1>")
})
app.listen(3005,()=>{
    console.log(`the server is running at 3008`)
})