const mongoose = require('mongoose');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const recipeSchema = new mongoose.Schema({
  title : String,
  summary : String,
  image : String,
  spoonacularScore : Number,
  instructions : String,
  healthScore : Number,
  createdInDb : {
    type : Boolean, 
    default : true
  },
  diets : [{
    type : String,
  }]
  
});

module.exports = mongoose.model('recipes', recipeSchema);