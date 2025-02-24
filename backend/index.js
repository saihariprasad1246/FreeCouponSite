import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./Middleware/Database.js";
import { fetchHomeCoupons,fetchCategoryCoupons, fetchCouponDetails } from "./Controllers/GetCoupon.js";


dotenv.config()


const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    })
)





app.get("/",fetchHomeCoupons);
app.get("/category/:category",fetchCategoryCoupons);
app.get('/description/:id',fetchCouponDetails)







const PORT = process.env.PORT || 3030;


const createServer = async()=>{
    try{
        const result = await connectDB(process.env.MONGO_URI);
        if(!result.status){
            console.log(result)
            throw new Error(result.message)
        }
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    }catch(err){
        console.log("Failed to create SERVER ");
        console.log(err.message);
    }
}


//app.listen(PORT,console.log(`Server running at ${PORT} `));
createServer()




