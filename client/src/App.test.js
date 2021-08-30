import { render, screen } from '@testing-library/react';
// import { Router } from 'react-router-dom';
// import Card from './components/Card/Card';
import Loading from './components/Loading/Loading';
// import { Provider } from 'react-redux';
// import App from './App';
// import AddRecipe from './components/AddRecipe/AddRecipe';
// import store from './store/index.js'

test('checks the loading component', () => {
    // <Provider store={store}>
    // <Router>
      render(<Loading />);
    {/* </Router> */}
    // </Provider>
//   const linkElement = screen.getByTestId('formAdd');
  expect(screen.getByTestId("divLoading")).toBeInTheDocument();
  expect(screen.getByTestId("textLoading")).toBeInTheDocument();
});