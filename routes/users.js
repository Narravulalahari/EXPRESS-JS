import express from "express"
var router=express.Router()
router.use('/',(req,res,next)=>{
    req.headers["content-type"]="application/json"
    console.log('api call received')
    next()
})
router.get('/',(req,res)=>{
 
    res.send("Get all users")
    
})
router.get('/get-user',(req,res,next)=>{
    const userobj={
        id:10,
        name:"abc",
        age:18
    }
    req.send("headers received"+req.headers["content-type"])
    res.send(userobj)
    next()
})
router.use('/',(req,res)=>{
    console.log('api call ended')
})
router.get('/createuser/:key([0-9]{4})',(req,res)=>{
    res.send('list of users'+req.params.key)
})
router.post('/createuser',(req,res)=>{
    res.send('list of users')
})
router.delete('/delete-user',(req,res)=>{
    res.send("delete the specific user")
})
export default router