import mongoose from 'mongoose'
import Genre from '../model/genreSchema.js'
import genreSchema from '../model/genreSchema.js'

const movieSchema={
    title: {
      type: String,
      required: true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    genre:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Genre'
      
    },
    numberInStock: { 
      type: Number, 
      required: true,
      min: 0,
      max: 255
    },
    dailyRentalRate: { 
      type: Number, 
      required: true,
      min: 0,
      max: 255
    }
}
const Movie=mongoose.model('Movie',movieSchema)

export default Movie