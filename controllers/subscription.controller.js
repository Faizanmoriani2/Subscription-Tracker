import Subscription from '../models/subscription.model.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id, // this req.user is not the part of the req body, as it is coming from the auth middleware.
        });

        res.status(201).json({success: true, data: subscription})

    } catch (error) {
        next(error)
    }
}

export const getUserSubscription = async (req, res, next) => {
    try {
        // Check if the user is the same as the one in the token.
        if(req.user.id !== req.params.id){
            const error = new Error('You are not the owner of this account')
        }

        const subscription = await Subscription.find({user: req.params.id});

        res.status(200).json({ success: true, data: subscription})

    } catch (error) {
        next(error)
    }
}