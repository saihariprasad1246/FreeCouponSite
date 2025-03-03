//import mongoose from 'mongoose';
import Coupon from "../Model/CouponSchema.js"



function getIndexes(pageNo,limit){
    const endIndex=(pageNo*limit)
    const startIndex = (pageNo-1)*limit
    return [startIndex,endIndex]
    }


//import Coupon from "../Model/CouponSchema.js";  // Ensure correct import

export const fetchHomeCoupons = async (req, res) => {
    try {
       /* console.log(req.query); // Corrected from res.query

        const searchFilter = req.query.search
            ? {
                  description: {
                      $regex: req.query.search,
                      $options: "i",
                  },
              }
            : {}; // Use an empty object to return all coupons if no search query is provided

        const coupons = await Coupon.find(searchFilter); // Fixed query logic

        //console.log(coupons.length);
        const pageNo=req.query.pageNo;
        const limit = 10; // Define the number of coupons to return per page
        const skip = (pageNo-1)*limit; // Calculate the number of coupons to skip
        const couponsPaginated = await Coupon.find(searchFilter).skip(skip).limit(limit); // Pag */



        let {pageNo,search}=req.query
        if(pageNo==null){
            pageNo=1
        }
        console.log(pageNo,search)
        const limit = 10; // Define the number of coupons to return per page
        const [startIndex,endIndex]=getIndexes(parseInt(pageNo),limit)

        const searchFilter = search
            ? {
                  description: {
                      $regex: search,
                      $options: "i",
                  },
              }
            : {}; // Use an empty object to return all coupons if no search query is provided

            const coupons = await Coupon.find(
                searchFilter, 
                { name: 1, category: 1, imgSrc: 1, imgAlt: 1, description: 1 }
              ).sort({ createdAt: -1 }); // Sort by `createdAt` in descending order (newest first)
              // Fixed query logic

              console.log(coupons)
              if(coupons.length<startIndex || coupons.length==0){
                return  res.status(200).json({
                 status:"failed",
                 message:"No more coupons to display",
                 data:[],
                 length:0
                })
             }
     
     
     
      
            return  res.status(200).json({
             status:"success",
             length:coupons.length,
             data:coupons.slice(startIndex,endIndex),
             message:"Get Coupons Succesfully"
            });
    } catch (err) {
        console.error("Error fetching coupons:", err.message); // Improved error logging
        res.status(500).json({
            message: "Internal Server Error",
            status: "failed",
        });
    }
};

/*
export const fetchCategoryCoupons = async (req, res) => {
    try {
        const category = req.params.category;
        console.log("Category:", category);

        const pageNo = parseInt(req.query.pageNo) || 1; // Ensure it's an integer, default to 1
        const limit = 10; // Number of coupons per page
        const skip = (pageNo - 1) * limit; // Calculate the number of documents to skip

        console.log("Pagination -> Page:", pageNo, "Skip:", skip, "Limit:", limit);

        // Fetch coupons with pagination
        const coupons = await Coupon.find(
            { category }, 
            { name: 1, category: 1, imgSrc: 1, imgAlt: 1, description: 1 }
        )
        .sort({ createdAt: -1 }) // Sort by latest first
        .skip(skip)
        .limit(limit);

        console.log("Fetched Coupons:", coupons.length);

        if (coupons.length === 0) {
            return res.status(200).json({
                status: "failed",
                message: "No more coupons to display",
            });
        }

        return res.status(200).json({
            status: "success",
            length: coupons.length,
            data: coupons,
            message: "Coupons fetched successfully",
        });

    } catch (err) {
        console.error("Error fetching coupons:", err.message);
        res.status(500).json({
            message: "Internal Server Error",
            status: "failed",
        });
    }
};*/




export const fetchCategoryCoupons=async(req,res)=>{
    try{
        const categoryName=req.params.category
        console.log(categoryName)
        let pageNo=req.query.pageNo
        console.log(pageNo)
        if(pageNo==undefined){
            pageNo=1
        }


        const limit = 10; // Define the number of coupons to return per page
        const [startIndex,endIndex]=getIndexes(parseInt(pageNo),limit)


        const coupons = await Coupon.find(
            { 'category':categoryName }, 
            { name: 1, category: 1, imgSrc: 1, imgAlt: 1, description: 1 }
        )
        .sort({ createdAt: -1 }) 

        //const coupons = await Coupon.find({category},{name:1,category:1,imgSrc:1,imgAlt:1,description:1}).sort({ createdAt: -1 }); // Fixed query logic

              console.log(coupons)
        if(coupons.length<startIndex || coupons.length==0){
           return  res.status(200).json({
            status:"failed",
            message:"No more coupons to display",
            data:[],
            length:0
           })
        }


        return  res.status(200).json({
            status:"success",
            length:coupons.length,
            data:coupons.slice(startIndex,endIndex),
            message:"Get Coupons Succesfully"
           });
    
        

    }catch(err){
        console.error("Error fetching coupons:", err.message); // Improved error logging
        res.status(500).json({
            message: "Internal Server Error",
            status: "failed",
        });

    }
}


export const fetchCouponDetails = async(req,res)=>{
    try{
        const _id=req.params.id
        const coupon = await Coupon.findById({_id});
        if(!coupon){
            return res.status(404).json({
                status:"failed",
                message:"Coupon not found",
                })
        }
        else{
            return res.status(200).json({
                status:"success",
                data:coupon,
                message:"Get Coupon Details Succesfully"
                });
        }
    }catch(err){
        console.error("Error fetching coupon details:", err.message);
        res.status(500).json(
            {
                message: "Internal Server Error",
                status: "failed",

            }
        )
    }
}