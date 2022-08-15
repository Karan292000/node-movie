import Movie from '../model/movieSchema.js'
import Genre from '../model/genreSchema.js'
import genreSchema from '../model/genreSchema.js'


//create Movie
const addMovie=(req,res)=>{
    async function addGenre(){
        try {
            const createMovie=async(title,genre,numberInStock,dailyRentalRate)=>{

                const movie=Movie({
                    title,genre,numberInStock,dailyRentalRate
                })
                const result=await movie.save()
                res.send(result);
            }
        createMovie('Kushi','629625d500289b7fc2ab2987',2,30)
            
        } catch (error) {
            console.log(error.message);
        }
}
// addGenre()
// addGenre('629625d500289b7fc2ab2987','6296260500289b7fc2ab2989','6296261000289b7fc2ab298b')
}

//update movie

const updateMovie=(req,res)=>{
    async function movieUpdate(){
        const userId=req.params.id
        const upName=req.body.title      
        
        try {
            // getCourse() 
            const update=await Movie.findByIdAndUpdate({_id:userId},{$set:{title:upName}},{new:true})
            res.send(update);
           
            } catch (error) {
                console.log(error.message)
            }
    }
    // movieUpdate()
}
//delete a movie

const deleteMovie=(req,res)=>{
    async function movieDelete(){
        const userId=req.params.id
        try {
            const remove=await Movie.findByIdAndDelete({_id:userId},{new:true})
            res.send(remove);
           
            } catch (error) {
                console.log(error.message)
            }


    }
// movieDelete()
}
//list all the movies with genre

const listMovie=(req,res)=>{
    async function movieList(){
      try {
        
        const list=await Movie.find().populate({ path: 'genre' })
        res.send(list)
    
      } catch (error) {
          console.log(error.message);
          
      }
    }
    movieList()
}

//show by movie id

const showMovie=(req,res)=>{
    
    async function movieShow(){
        try {
          const id=req.params.id
          const list=await Movie.findById(id).populate({ path: 'genre' })
          res.send(list)
      
        } catch (error) {
            console.log(error.message);
            
        }
      }
      movieShow()
  }

//do populate
const getCourse=async()=>{
    const course=await Movie.find().populate({ path: 'genre' })
    console.log(course);
}
//  getCourse()

export {addMovie,updateMovie,deleteMovie,listMovie,showMovie}