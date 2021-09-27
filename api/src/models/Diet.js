const mongoose = require('mongoose');
const dietSchema = new mongoose.Schema ({
  name : String
})

module.exports = mongoose.model('diets', dietSchema);
