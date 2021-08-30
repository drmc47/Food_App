import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changePage } from '../../actions/index';
import './Footer.css'


function Footer() {
    // let [Page, setPage] = React.useState(1)
    let Page = useSelector(state => state.Page)
    const recipe = useSelector(state => state.recipe)
    let max = Math.ceil(recipe.length/9)
    const dispatch = useDispatch();
   
    return (
        <div className='pageChanger'>
            <button className="buttonChanger" onClick={() => {if(Page>1) {dispatch(changePage(-1))}}}> Prev </button>
            <label htmlFor="page" className="labelPage">Page {Page} </label>
                 
            <button className="buttonChanger" onClick={() =>{if(Page<max) {dispatch(changePage(1))}}}> Next</button>
        </div>
    )
}

export default Footer
