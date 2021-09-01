import React from 'react';
import {Link} from 'react-router-dom';
import { filterDiet, orderAZ, orderScore, searchRecipe } from '../../actions';
import {useDispatch} from 'react-redux';
import './Nav.css';
import Button from '@material-ui/core/Button';
import {yellow} from '@material-ui/core/colors';




function Nav() {
  const dispatch = useDispatch();
    return (
        <div className='navbar'>
          <div className="topButtons">
            <Link to='/home' style={{textDecoration:'none'}}>
          {/* <Button variant='contained' color='primary'>   
          HOME
            </Button>  */}
      <button className='botonHome'>
            Home
      </button>   
            </Link>
      <Link to='/home/addrecipe'>
    <button className='addrecipe'>Add recipe!</button>
    </Link>

          </div>
    <form onSubmit={(e) => e.preventDefault()} className='theForm'>
    <label>
      Search recipe: 
      <input type="text" name="name" placeholder='keyword...' onChange={(e) => dispatch(searchRecipe(e.target.value))} className='inputSearch'/>
     
    </label>
   
    <label htmlFor="order" className="labelSelect">Alphabetically: </label>
    <select defaultValue='0' onChange={(e) => dispatch(orderAZ(1*e.target.value))} className='selectAZ'>
      <option name='A-Z' value="1">A-Z</option>
      <option name='Z-A' value="-1">Z-A</option>
      <option name='none' value="0">None</option>
    </select>
    <label htmlFor="score" className="labelSelect">By score</label>
    <select defaultValue='0' onChange={(e) => dispatch(orderScore(1*e.target.value))} className='selectOrder'>
      <option name='ASC' value="1">ASC</option>
      <option name='DESC' value="-1">DESC</option>
      <option name='none' value="0">None</option>
    </select>

    <label htmlFor="filterby" className="labelSelect">Filter by:</label>
    <select defaultValue='none' onChange={e=> dispatch(filterDiet(e.target.value))} className='selectDiets'>
      <option value="gluten free">Gluten Free</option>
      <option value="dairy free">Dairy Free</option>
      <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="paleolithic">Paleolithic</option>
      <option value="primal">Primal</option>
      <option value="pescatarian">Pescatarian</option>
      <option value="whole 30">Whole 30</option>
      <option value="fodmap friendly">Fodmap Friendly</option>
      <option value="none">None</option>
    </select>
   
  
    </form>
   
        </div>
    )
}

export default Nav
