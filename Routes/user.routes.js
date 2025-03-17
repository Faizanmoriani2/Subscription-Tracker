import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res)=>{
    res.send("GET all users")
})
userRouter.get("/:id", (req, res)=>{
    res.send("GET a users")
})
userRouter.post("/", (req, res)=>{
    res.send("CREATE a users")
})
userRouter.put("/:id", (req, res)=>{
    res.send("UPDATE a users")
})
userRouter.delete("/:id", (req, res)=>{
    res.send("DELETE a users")
})

export default userRouter;