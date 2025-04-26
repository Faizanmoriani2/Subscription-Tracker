import aj from '../config/arcjet.js'

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {requested: 1}); // requested 1 mean we take out 1 token at a time from bucket when ever requeest is made

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({error: "Rate limiter exceeded"});
            if(decision.reason.isBot()) return res.status(403).json({error: "Bot Detection"});
            
            return res.status(403).json({error: "Access Denied "});     
        }

        next();

    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;