import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=>{
    res.send({title: "Get all Subscription"})
})

subscriptionRouter.get('/:id', (req, res)=>{
    res.send({title: "Get a Subscription deatils"})
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res)=>{
    res.send({title: "UDPATE a Subscription"})
})

subscriptionRouter.delete('/:id', (req, res)=>{
    res.send({title: "DELETE a Subscription"})
})

subscriptionRouter.get('/users/:id', authorize,getUserSubscription)

subscriptionRouter.put('/:id/cancel', (req, res)=>{
    res.send({title: "cancel user Subscription"})
})

subscriptionRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title: "Get upcoming renewals"})
})

export default subscriptionRouter