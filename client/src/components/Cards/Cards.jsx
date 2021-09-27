import React, { useEffect } from 'react'
import Card from '../Card/Card'
import {useSelector} from 'react-redux'
import Loading from '../Loading/Loading'
import './Cards.css'




function Cards() {
    const {recipe, search, Score, filtered, Order, Page} = useSelector(state => state)
    // const search = useSelector(state => state.search)
    // const Score = useSelector(state => state.Score)
    // const filtered = useSelector(state => state.filtered)
    // const Order = useSelector(state => state.Order)
    // const Page = useSelector(state => state.Page)
    useEffect(() => {
        window.scrollTo(0, 0)
      })
    let show = Object.assign([]);
    let inf = 9*(Page - 1)
    let sup = 9*Page-1
    if (recipe.length) {
       show = [...recipe]
       if (filtered.length && filtered!=='none') {
           show = recipe.filter(e=> {
               if (e.createdInDb) {
                   return e.diets.find(elem=> elem.name.includes(filtered) )
               }
            return e.diets.includes(filtered)
        })
        }
        // if (Order===1) {
        //    show.sort((a,b) => (a.title > b.title) ? 1 : -1)}
        // if (Order===-1) {
        //     show.sort((a,b) => (a.title < b.title) ? 1 : -1)}
        //  ...   show.sort((a,b)=> (a.title > b.title)  ? -1 : 1
        
        if(Score) {
            show.sort((a,b) => (a.spoonacularScore > b.spoonacularScore) ? Score : -Score)
        }
        if(Order) {
            show.sort((a,b) => (a.title > b.title) ? Order : -Order)
        }
        if(search.length) {
            show = show.filter(e=> e.title.toLowerCase().includes(search.toLowerCase()))

        }
            show = show.filter((_e,i) => i >= inf && i <= sup)
        return (<div className='cards'>
           
            {show.map((e) => 
                <Card 
                key={e.id}
                img={e.image}
                title={e.title}
                diets={e.diets}
                id={e.id}
                _id={e._id}
                     />)
                }
                </div>)
    }
    
    return <Loading/>

}

export default Cards



/*  [0,8]   Page 1      inf = 9*(Page-1)            sup=9*Page-1
    [9,17]  Page 2      inf = 9*(Page-1)            sup=9*Page-1
    [18,26] Page 3      inf = 9*(Page-1)            sup=9*Page-1
    [27,35] Page 4      inf = 9*(Page-1)            sup=9*Page-1
        ... 


    EJEMPLO 100 elem
    [99,91] Page 1             inf=length-1                             sup = length-9*Page
    [90,82] Page 2             inf=length-10                            sup = length-9*Page
    [81,73] Page 3             inf=length-(9*Page-8)                    sup = length-9*Page
    [72,64] Page 4             inf=length-(9*Page-8) //28
    [63,55] Page 5             inf=length-(9*Page-8) //28
    [54,46] Page 6             inf=length-(9*Page-8) //28
    [45,37] Page 7             inf=length-(9*Page-8) //28
    [36,28] Page 8             inf=length-(9*Page-8) //28
    [27,19] Page 9             inf=length-(9*Page-8) //28
    [18,10] Page 10            inf=length-(9*Page-8) //28
    [9,1] Page 11              inf=length-(9*Page-8) //28
    [0] Page 12                inf=length-(9*Page-8) //28

    
       


*/
