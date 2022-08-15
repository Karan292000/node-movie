import mongoose from "mongoose"

const customerSchema={
    id:{type:Number,required:true},
    name: { type: String, required: true, minlength: 5, maxlength: 50 }, 
    isGold:{ type: Boolean, default: false }, 
    phone:{ type: String, required: true, minlength: 5, maxlength: 50 }
}
const Customer=mongoose.model('Customer',customerSchema)

export default Customer 