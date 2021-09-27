import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card({img, title, diets, id, _id}) {
    if(_id) id=_id 
    return (
        <Link to ={{
            pathname: '/home/detail',
            search: `${id}`
        }} style={{textDecoration:'none'}}>
        <div className='card' data-testid="PRUEBA">
            {
            <div>
                <img src={img} alt="img not found" className='cardImage'/>
                <h1 className='titleCard'>{title}</h1>
                {diets ? 
                (typeof diets[0] ==='object' ? diets.map((diet, index)=> <li key={index} className='dietCard'>{diet.name}</li>) : diets.map((diet, index)=> <li key={index} className='dietCard'>{diet}</li>)) : null
                }
            </div>
            }
        </div>
        {/* <button>More info</button> */}
        </Link>
        
    )


}

export default Card
