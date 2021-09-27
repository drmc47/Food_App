const { Router } = require('express');
const recipesRoutes = require('./recipes.js')
const Diet = require('../models/Diet');
const Recipe = require('../models/Recipe.js');
const diets = ['gluten free','dairy free','lacto ovo vegetarian', 'vegan','paleolithic','primal','pescatarian','fodmap friendly','whole 30','ketogenic']
let createDiets = async() => {
  try {
    diets.map(async(e) => {
    await new Diet({name : e}).save()
    })
  } catch (error) {
    
  }
}

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRoutes)

router.get('/types', async(_req,res) => {
    await createDiets();
    return res.send(diets);
    
})
router.post('/recipe', async(req,res) => {
    const {title, image, summary, spoonacularScore, healthScore, instructions, diets} = req.body
      try {

        let newRecipe = await new Recipe({
          title,
          summary,
          image,
          spoonacularScore,
          healthScore,
          instructions,
          diets
        })
        await newRecipe.save()
        return res.json(newRecipe)
      } catch (error) {
        return res.json({error: 'It requires a valid name and a valid summary!'})
        
      }
    
    
})

module.exports = router;
