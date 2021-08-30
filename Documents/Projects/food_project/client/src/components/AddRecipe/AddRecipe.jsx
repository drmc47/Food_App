import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiets, getRecipes } from '../../actions'
import './AddRecipe.css'



function AddRecipe() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])
    const dietas = useSelector(state => state.diets)
    const [input, setInput] = useState({
        title: '',
        image: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        instructions: '',
        diets: []
    })

    let handleChange =(e)=> {
        if(dietas.includes(e.target.name)) {
            setInput({
                diets: input.diets.push(e.target.name)
            })
        } 
            setInput({
                ...input,
                [e.target.name]:e.target.value
            })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/recipe', input)
        .then(response => {
            dispatch(getRecipes())
            alert(response.data.text)
        })
    }
    const enabled = input.title && input.summary && input.spoonacularScore && input.healthScore;
    return (
        <div className='container' data-testid="PRUEBA">
            <form className="formAdd" >
                <label htmlFor="name">Recipe's name *</label>
                <input type="text" placeholder='name of the recipe' name='title' onChange={handleChange}/>
                <label htmlFor="imageUrl">Image</label>
                <input type="text" placeholder='url image' name='image' onChange={handleChange}/>
                <label htmlFor="summary">Summary *</label>
                <textarea name="summary" id="qsy" cols="30" rows="5" onChange={handleChange}></textarea>
                <label htmlFor="score">Score*</label>
                <input type="number" placeholder='from 0 to 100' name="spoonacularScore" id="1234" onChange={handleChange}/>
                <label>Healthyness*</label>
                <input type="number" placeholder='from 0 to 100' name='healthScore' onChange={handleChange}/>
                <label htmlFor="stepbystep">Instructions</label>
                <textarea type="text" placeholder='if necessary...' name='instructions' onChange={handleChange}/>
                <label htmlFor="diets"> <b>Diets:</b> </label>   
                <hr />   
                <div className="dietsList">
                <label htmlFor="glutenfree">
                    Gluten free
                <input type="checkbox" name="gluten free"  onChange={handleChange}/>
                </label>
                <label htmlFor="dairyfree">
                    Dairy Free
                <input type="checkbox" name="dairy free"  onChange={handleChange}/>
                </label>
                <label htmlFor="vegan">
                    Vegan
                <input type="checkbox" name="vegan"  onChange={handleChange}/>
                </label>
                <label htmlFor="lacto ovo vegetarian">
                    Lacto Ovo Vegetarian
                <input type="checkbox" name="lacto ovo vegetarian" onChange={handleChange}/>
                </label>
                <label htmlFor="paleolithic">
                Paleolithic
                <input type="checkbox" name="paleolithic" onChange={handleChange}/>
                </label>   
                <label htmlFor="primal">
                Primal
                <input type="checkbox" name="primal" onChange={handleChange}/>
                </label>
                <label htmlFor="pescatarian">
                Pescatarian
                <input type="checkbox" name="pescatarian" onChange={handleChange}/>
                </label>
                <label htmlFor="fodmap friendly">
                Fodmap friendly
                <input type="checkbox" name="fodmap friendly" onChange={handleChange}/>
                </label>
                <label htmlFor="whole 30">
                Whole 30
                <input type="checkbox" name="whole 30"onChange={handleChange}/>
                </label>
                <label htmlFor="ketogenic">
                Ketogenic
                <input type="checkbox" name="ketogenic" onChange={handleChange}/>
                </label>
                    
                </div>      
                <button className="createButton" onClick={handleSubmit} disabled={!enabled}>Create Recipe</button>
              
            </form>
        </div>  
    )
}

export default AddRecipe
