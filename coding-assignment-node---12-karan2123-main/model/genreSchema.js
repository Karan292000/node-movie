import mongoose from 'mongoose'
import Joi from 'joi'

const genreSchema ={
  name: {
    type: String,
    minlength: 5,
    maxlength: 50
  }
};
const Genre=mongoose.model('Genre',genreSchema) 



export default genreSchema

