import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES'
export const GET_INFO = 'GET_INFO'
export const ADD_PAGE = 'ADD_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ORDER_AZ = 'ORDER_AZ'
export const ORDER_SCORE = 'ORDER_SCORE'
export const FILTER_DIET = 'FILTER_DIET'
export const SEARCH_RECIPE = 'SEARCH_RECIPE'
export const GET_DIETS = 'GET_DIETS'


export const getRecipes = () => {
    return (dispatch) => {
        axios.get(`/recipes`) //localhost:3001/recipes
        .then(response => {
            dispatch({type: GET_RECIPES, payload: response.data})
    })
    }
}


export const getDiets = () => {
    return (dispatch) => {
        axios.get('/types')
        .then(response => {
            dispatch({type: GET_DIETS, payload: response.data})
    })
    }
}

export const getInfo = (id) => {
    return (dispatch) => {
        axios.get(`/recipes/${id}`)
        .then(response => {
            dispatch({type: GET_INFO, payload: response.data})
        })
        .catch(error => {
            if(error.response?.status) {
                if(error.response.status === 404) {
                    return dispatch({type: GET_INFO, payload: null})
                    
                }
            }
            alert(`ERROR ${error.response?.status} `)
        })
    }
}

export const changePage = (payload) => {
    return {
    type: CHANGE_PAGE,
    payload
    }
}

export const orderAZ = (payload) => ({
    type: ORDER_AZ,
    payload

})

export const orderScore = (payload) => ({
    type: ORDER_SCORE,
    payload
})

export const filterDiet = (payload) => ({
    
    type: FILTER_DIET,
    payload
})

export const searchRecipe = (payload) => ({
    type: SEARCH_RECIPE,
    payload
})
export const clearPage = () => ({
    type: GET_INFO,
    payload : undefined
})







// export const addPage = () => ({
//     type: ADD_PAGE,
//     payload
// })


//https://api.spoonacular.com/recipes/{payload}/information



// export const getInfo = (payload) => {
//     return {
//     type: GET_INFO,
//     payload: payload
//     }
// }