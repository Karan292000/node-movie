
import Customer from '../model/customerSchema.js'


//insert customers to the customer collections
const insertCustomer=(req,res)=>{
  async function create(){
      try {
          const createCustomer=await Customer.insertMany([
              {id:1,name:'Deepa',isGold:true,phone:9655619196},
              {id:2,name:'Aryan',phone:9994388474},
              {id:3,name:'Dharshini',isGold:true,phone:9347261892}
          ])
          res.send(createCustomer)
      } catch (error) {
          console.log(error.message)
      }
  }
create()
}

//get a customer details from the collection
const getCustomer=(req,res)=>{
    async function getOne(){
     const getOne=await Customer.find({id:req.body.id},{_id:0,__v:0})
     if(getOne) return res.send(getOne);

     res.status(400).send('Id is not matched')
    }
getOne()
}

//get all customers
const getAllCustomer=(req,res)=>{
async function getAll(){
  const getAll=await Customer.find()
  res.send(getAll)
}
getAll()
}

//update customer
const updateCustomer=(req,res)=>{

    async function update(){
        try {
          
            const update=await Customer.findOneAndUpdate({id:parseInt(req.body.id)},{$set:{name:req.body.name}},{new:true})
            res.send(update)
        
        }catch (error) {
            console.log(error.message);
        }

    }
update()
}
//update customer
const deleteCustomer=(req,res)=>{
    try {
        async function deleteC(){
        const deleteUser=await Customer.findOneAndDelete({id:parseInt(req.body.id)},{new:true})
        if(!deleteUser) return  res.status(400).send("user doesn't exist")
        
        res.send(deleteUser);

        }

    deleteC()
    } catch (error) {
        console.log(error.message);
    }

}


export {insertCustomer,getAllCustomer,getCustomer,updateCustomer,deleteCustomer}