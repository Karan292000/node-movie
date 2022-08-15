
 import Genre from '../model/genreSchema.js'
import Joi from 'joi'

//find all geners
const findAll= async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
}

//add new genre
const addGenre=async (req, res) => {
//   const { error } = validateGenre(req.body); 
//   if (req.body) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  
  res.send(genre);
};

//update genre
const updateGenre=async (req, res) => {
//   const { error } = validateGenre(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
  res.send(genre);
};

//delete genre
const deleteGenre=async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
};

//get a genre
const getOneGenre= async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
};

export {findAll,addGenre,updateGenre,deleteGenre,getOneGenre}