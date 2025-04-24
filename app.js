import express from "express"
// import { PORT } from "./config/env.js";
import userRouter from "./Routes/user.routes.js";
import authRouter from "./Routes/auth.routes.js";
import subscriptionRouter from "./Routes/subscription.routes.js"
import connectDb from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";


const app = express();

// some additional builtin express middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.use(errorMiddleware);

app.get('/', (req,res)=> res.send("Welcome to Subscription Tracker"))

app.listen(process.env.PORT || 4400,
    async () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT || 4400}`)
    
        await connectDb()
    }
)

export default app;