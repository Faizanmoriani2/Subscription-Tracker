import express from "express"

const authRouter = express.Router()

authRouter.post('/sign-up', (req,res)=>{
    res.send("sign-up")
})
authRouter.post('/sign-in', (req,res)=>{
    res.send("sign-in")
})
authRouter.post('/sign-out', (req,res)=>{
    res.send("sign-out")
})

export default authRouter;