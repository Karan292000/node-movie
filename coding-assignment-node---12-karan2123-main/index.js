import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import customers from './routes/customer.js'
import genres from './routes/genres.js'
import movies from './routes/movies.js'
import rentals from './routes/rentals.js'

const app=express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/customer',customers)
app.use('/api/genres',genres)
app.use('/api/movies',movies)
app.use('/api/rentals',rentals)


mongoose.connect('mongodb://localhost:27017/customer')
.then(()=>console.log('db is connected'))
.catch(()=>console.log('cannot connect db'))



app.listen(2000,()=>{
    console.log("server is running on 2000")
})

