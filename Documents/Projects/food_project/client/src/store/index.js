import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { GET_RECIPES, GET_INFO, CHANGE_PAGE, ORDER_AZ, FILTER_DIET, SEARCH_RECIPE, ORDER_SCORE, GET_DIETS } from '../actions'

const initialState = {
    recipe: [],
    diets:[],
    moreInfo: {},
    Page: 1,
    Order: 0,
    Score: 0,
    filtered: '',
    search: ''
    
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_RECIPES:
        return {
            ...state, 
            recipe: action.payload,
            
           
        }
        case GET_DIETS: 
        return {
            ...state,
            diets: action.payload
        }

        case GET_INFO: 
        return {
            ...state,
            moreInfo: action.payload
        }
        case CHANGE_PAGE: 

        return {
            ...state,
            Page: state.Page + action.payload
        }

        case ORDER_AZ: 
        return {
            ...state, 
            Order: action.payload,
           
        }

        case ORDER_SCORE:
            return {
                ...state,
                Score: action.payload
            }

    
        case FILTER_DIET: 
        return{ 
            ...state,
            //filtered: state.recipe.filter(e=> e.diets.includes(action.payload))
            filtered: action.payload
            
        }

        case SEARCH_RECIPE: 
        return {
            ...state,
            search: action.payload
        }

    default:
        return state
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;