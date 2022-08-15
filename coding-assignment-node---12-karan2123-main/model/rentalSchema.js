
import mongoose from 'mongoose'
import Movie from './movieSchema.js'
import Genre from './genreSchema.js'
import Customer from './customerSchema.js'




const rentalSchema={
    customer:{ 
   type:mongoose.Schema.Types.ObjectId,
    ref:'Customer',  
    required: true
  },
  movie: {
    type:mongoose.Schema.Types.ObjectId,
     ref:'Movie' ,
     required: true
  },
  dateOut: { 
    type: Date,
    required: true,
    default:{ $gte: Date},
  },

  dateReturned: { 
    type:Date
  },
  rentalFee: { 
    type: Number, 
    min: 0,
    default:()=>{
             return Math.round(0*5)
    }
   
  }  // this should calculate automatically based on the dateReturned- dateOut   * rentalFee


  // date.toISOString().substring(0, 10);
  // console.log(date);

  // efault:()=>{
  //   let date = new Date(dateOut);
  //   let year = date.getFullYear();
  //   let month = date.getMonth()+1;
  //   let dt = date.getDate();
  
    
  //   if (dt < 10) { 
  //     dt = '0' + dt;
  //   }
  //   if (month < 10) {
  //     month = '0' + month;
  //   }
    
  //   console.log(year+'-' + month + '-'+dt);
  // }
}
 
const Rental=mongoose.model('Rental',rentalSchema)

export default Rental