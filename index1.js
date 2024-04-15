import express from "express"
import products from './routes/products.js'
import user from './routes/users.js'
const app=express()
app.use("/products",products)
app.use("/user",user)
app.listen(3000,()=>{
    console.log("app is running")
})

