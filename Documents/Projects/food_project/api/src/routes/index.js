const { Router } = require('express');
const recipesRoutes = require('./recipes.js')
const {Recipe, Diet} = require('../db.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets = ['gluten free','dairy free','lacto ovo vegetarian', 'vegan','paleolithic','primal','pescatarian','fodmap friendly','whole 30','ketogenic']
let createDiets = async() => {
  
    for (let index = 0; index < diets.length; index++) {
        try {
            await Diet.findOrCreate({
              where: {
                name: diets[index]}
            })
            
          } catch (error) {
            console.log(error);
          }
    }
}

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRoutes)

router.get('/types', async(_req,res) => {
    await createDiets();
    return res.json(diets)
    
})
router.post('/recipe', async(req,res) => {
    const {title, image, summary, spoonacularScore, healthScore, instructions, diets} = req.body
    if (title && summary) {

      try {
        let recipeCreated = await Recipe.create({
          title,
          image,
          summary,
          spoonacularScore,
          healthScore,
          instructions
        })
        let dietInDb = await Diet.findAll({
          where: {name: diets}
        })
        recipeCreated.addDiet(dietInDb)
      } catch (error) {
        return res.json({error: 'It requires a valid name and a valid summary!'})
        
      }
      finally {
        return res.json({text: 'Recipe Created!'})

      }
    }
    
})

module.exports = router;
