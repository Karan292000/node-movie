import express from 'express'
import { addRental,  deleteRental,  listAllRents,  updateRental} from '../controller/rentals.js'


const router=express.Router()

router.post('/insert',addRental)

router.put('/update',updateRental)

router.delete('/delete',deleteRental)

router.get('/listall',listAllRents)



export default router