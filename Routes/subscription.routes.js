import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=>{
    res.send({title: "Get all Subscription"})
})

subscriptionRouter.get('/:id', (req, res)=>{
    res.send({title: "Get a Subscription"})
})

subscriptionRouter.post('/', (req, res)=>{
    res.send({title: "CREATE all Subscription"})
})

subscriptionRouter.put('/:id', (req, res)=>{
    res.send({title: "UDPATE a Subscription"})
})

subscriptionRouter.delete('/:id', (req, res)=>{
    res.send({title: "DELETE a Subscription"})
})

subscriptionRouter.delete('/users/:id', (req, res)=>{
    res.send({title: "GET all user Subscription"})
})

subscriptionRouter.put('/:id/cancel', (req, res)=>{
    res.send({title: "cancel user Subscription"})
})

subscriptionRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title: "Get upcoming renewals"})
})

export default subscriptionRouter