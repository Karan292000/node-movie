import express from 'express'
import {findAll,addGenre,updateGenre,deleteGenre,getOneGenre} from '../controller/genres.js'

const router = express.Router();


router.get('/find',findAll)

router.post('/add',addGenre)

router.put('/update/:id',updateGenre)

router.delete('/delete',deleteGenre)

router.get('/getone/:id',getOneGenre)


export default router