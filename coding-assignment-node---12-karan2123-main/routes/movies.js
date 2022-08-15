import { addMovie,updateMovie,deleteMovie,listMovie,showMovie } from "../controller/movies.js";
import express from 'express'


const router=express.Router()

router.post('/add',addMovie)
router.put('/update/:id',updateMovie)
router.delete('/delete/:id',deleteMovie)
router.get('/list',listMovie)
router.get('/show/:id',showMovie)



export default router