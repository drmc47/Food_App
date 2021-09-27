import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearPage, getInfo } from '../../actions'
import Error404 from '../Error404/Error404';
import Loading from '../Loading/Loading';
import './Detail.css'

function Detail({location: {search}}) {
    let id = search.substring(1);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getInfo(id));
        return () => {
            dispatch(clearPage())

        }
    }, [dispatch, id]) 
    let moreInfo = useSelector(state => state.moreInfo) 

   
    // function createInstructions() {
    //     return {__html: moreInfo.instructions};
    // }
    if(moreInfo === null) {
        return <Error404/>
    }
    
    if (moreInfo?.title!==undefined) {
        console.log(moreInfo)
        return (
            <div className='detailContainer'>
                    
                    <h1 className='detailTitle'>{moreInfo.title}</h1>
                    <img src={moreInfo.image} alt="img not found" className='imgDetail'/>
                    <h3>Diet type</h3>
                    <p>{moreInfo.createdInDb ? moreInfo.diets.map((diet, index)=> <li key={index}>{diet}</li>) : moreInfo.diets.map((diet, index)=> <li key={index}>{diet}</li>)}</p> 
                    <h3><b>Instructions: </b></h3>
                    {moreInfo.instructions ? <p>{moreInfo.instructions.replace(/(<([^>]+)>)/ig,'')}</p> : (moreInfo.analyzedInstructions?.length  ? moreInfo.analyzedInstructions[0].steps.map((e,i)=> <li key={i}>{e.step.replace(/(<([^>]+)>)/ig,'')}</li>) : <p>Sorry, no instructions available</p>)}
                    {/* <div dangerouslySetInnerHTML={createInstructions()}></div>  */}
                    <h3><b>Score</b></h3>
                    <p>{moreInfo.spoonacularScore}</p>
                    <h3><b>Healthyness</b> </h3>
                    <p>{moreInfo.healthScore}</p>
                    <h3><b>Summary:</b></h3>
                    <p>{moreInfo.summary.replace(/(<([^>]+)>)/ig,'')}</p>
                </div>
            )
    }   
    
        return <Loading/>
        
        
    }
    
    export default Detail
    

    // let instructions = [];
    // let final = [];

    // if (!moreInfo) {return <h1>Cargando...</h1>}
    // if (moreInfo.analyzedInstructions.length) {
    //         for (const property in moreInfo.analyzedInstructions[0].steps) {
    //             instructions.push(moreInfo.analyzedInstructions[0].steps[property])
    //         }
            
    //         final = instructions.map(e => e.step)
    
    //     }