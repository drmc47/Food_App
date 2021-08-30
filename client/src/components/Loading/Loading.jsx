import React from 'react'
import './Loading.css'


function Loading() {
    return (
        <div className='loadingDiv' data-testid="divLoading">
            
            <h1 className='loadingTitle' data-testid="textLoading">Loading...</h1>
            
        </div>
    )
}

export default Loading
