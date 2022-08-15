import Rental from "../model/rentalSchema.js";
import mongoose from "mongoose";
import express from "express";



//add new renatl document for a collection with cusyomer and movie reference
const addRental=(req,res)=>{

        try {
            const createRental=async(customer,movie,dateOut,dateReturned,rentalFee)=>{

                const rental=Rental({
                    customer,movie,dateOut,dateReturned,rentalFee
                })
                const result=await rental.save()
                res.send(result);
            }
// createRental("62926486fd0f6aa05ed472b7","629c39838f583133d0bcf941",new Date('2021-12-15'),new Date("2022-01-10"))

        } catch (error) {
            console.log(error.message);
        }
       
}


//update rental fee with the help of aggregation
const updateRental=async(req,res)=>{
     
        try { 
    //populate 
        const popRent=await Rental.find().populate([{ path: 'customer' },{path:'movie'}])

    //get id for pass into match       
        const getid=req.body.id

    //find date between dateOut and returned
        const findDays=await Rental.aggregate([{$match:{_id:mongoose.Types.ObjectId(getid)}},
        {$project:{_id:0,date_diff:{$subtract:["$dateReturned","$dateOut"]}}},
        {$project:{days:{$divide:["$date_diff",1000*60*60*24]}}}])

    //find rentalrate
        const noDay=popRent.map(i=>{
            const fee= i.movie.dailyRentalRate;
            return fee
           })
           const rent=parseInt(noDay[0])*parseInt(findDays[0].days)

    //finally update fee
           const updatefee=await Rental.findByIdAndUpdate({_id:getid},{$set:{rentalFee:rent}},{new:true})
            res.send(updatefee)
            } catch (error) {
                console.log(error.message)
            }
    }

//delete rental using id 
const deleteRental=async(req,res)=>{
    try {
       let getid=req.body.id
       const deleteRent=await Rental.findByIdAndDelete({_id:getid})
       res.send(`The deleted Document ${deleteRent}`) 
    } catch (error) {
     console.log(error.message);   
    }
} 

//list all the rentals document with the id
const listAllRents=async(req,res)=>{
    const getid=req.body.id
    const findAll=await Rental.findById({_id:getid}).populate([{ path: 'customer' },
    {path:'movie',
    populate:{
        path:'genre',
        moddel:'Genre'
    }
}])
    res.send(findAll)
    
}


export {addRental,updateRental,deleteRental,listAllRents}