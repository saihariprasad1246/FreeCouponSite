import mongoose from "mongoose";


const connectDB = async (url)=>{
    try{
        const response = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
        const result = {
            status: true,
            message:response
        }
        return result;

    }catch(err){
        console.log("Failed to connect")
        const result ={
            status: false,
            message: err.message
        }
        return result
    }
}


export default connectDB;