const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    
    spoonacularScore: {
      type: DataTypes.REAL,
      defaultValue: 0
    },
    healthScore: {
      type: DataTypes.REAL,
      defaultValue: 0
    },
    instructions: {
      type: DataTypes.TEXT
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0

    },
    id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    


  }, {timestamps: false})


};

