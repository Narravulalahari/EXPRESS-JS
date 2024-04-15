import express from "express"
var router=express.Router()
//products
router.get('/',(req,res)=>{
    res.send("Get request for products")
})
//products/get-product-details
router.get('/get-product-details',(req,res)=>{
    res.send("this is get details method")
})
export default router