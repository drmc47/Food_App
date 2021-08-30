import './App.css';
import { getDiets, getRecipes } from './actions';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import Cards from './components/Cards/Cards.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())
    
  }, [dispatch])

  return (
    <div className="App">
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
