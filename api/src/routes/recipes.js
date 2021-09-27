const router = require('express').Router();
const Recipe = require('../models/Recipe')
const axios = require('axios').default;
require('dotenv').config();
const {API_KEY} = process.env;

const getapiData = async()=> {
    try {
        let recipe = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&addRecipeInformation=true`)
            recipe = recipe.data.results //array de objs
            return recipe
        
    } catch (error) {
        console.log(error)
    }
        
}

const getDb = async()=> {
    try {
        return await Recipe.find();
    }
     catch (error) {
        console.log(error)
    } }

const getAll = async() => {
    try {
        const apiInfo = await getapiData();
        const dbInfo = await getDb();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal;
        
    } catch (error) {
        console.log(error)
    }
}
router.get('/prueba', async(_req, res) => {
    const recipes = await getapiData();
    recipes.map(async(e) => {
       await new Recipe({
            title : e.title,
            summary : e.summary,
            image : e.image,
            score : e.spoonacularScore,
            healthScore : e.healthScore,
            diets : e.diets
        }).save();
    })
    return res.send(recipes)

})

router.get('/', async(req, res) => {

    let {name} = req.query;
    try {
        let recipe = await getAll();
            if (name) {
                
                let found = recipe.filter(e=> e.title.toLowerCase().includes(name.toLowerCase()))
                if (found.length) {
                    return res.json(found)
                }
                // return res.json({error: 'No recipes found with that name'})
                return res.sendStatus(404)
            }
            return res.json(recipe);
        
    } catch (error) {
        console.log(error)
    }
            
        

    
});
router.get('/:idReceta', async(req, res, next) => {
    let {idReceta} = req.params;

    try {
        let recipe = await getAll();
        let found = recipe.find(e=> e.id == idReceta)
        found ? res.json(found) : res.sendStatus(404)
    } catch (error) {
        res.sendStatus(error.response.status)
        next()
    }
})




module.exports = router;
//https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}
//https://api.spoonacular.com/recipes/complexSearch?apiKey=eae5f9f509284cf38231577d3568873a&number=10&addRecipeInformation=true`
//https://api.spoonacular.com/recipes/716426/information?apiKey=eae5f9f509284cf38231577d3568873a&addRecipeInformation=true

//https://api.spoonacular.com/recipes/716426/information?apiKey=7e8c3aaf71024efd93bf10d5244a8546