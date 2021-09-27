require('dotenv').config();
const mongoose = require('mongoose')
const {
  DB_USER, DB_PASSWORD, DB_NAME,
} = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bucbj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const db = mongoose.connection;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

db.once('open', _=> {
  console.log('Database is connected successfully');
})

db.on('error', err => {
  console.log(err);
})


// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
// };
