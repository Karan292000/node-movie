import express from 'express'
import { insertCustomer,getAllCustomer,getCustomer,updateCustomer,deleteCustomer } from '../controller/customer.js'


const router=express.Router()


router.post('/insert',insertCustomer)

router.get('/getall',getAllCustomer)

router.get('/getone',getCustomer)

router.put('/update',updateCustomer)

router.delete('/delete',deleteCustomer)

export default router