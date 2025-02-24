import mongoose from 'mongoose'

const CouponSchema =new  mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    imgSrc:{
        type:String,
        required:true
    },
    imgAlt:{
        type:String,
        required:true
    },
    href:{
        type:String,
        required:true
    },
    uploadTime:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    courseId:{
        type:String,
        required:true
    },
    udemyLink:{
        type:String,
        required:true

    },
    couponCode:{
        type:String,
        required:true
    },
    expiresIn:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})


export default mongoose.model("Coupon",CouponSchema);
