import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Products from './components/Products/Products';
import SingleMeal from './components/SingleMeal/SingleMeal';


function App() {
  const router = createBrowserRouter([
  {path : '/' , element : <Main></Main> , children : [
    {path : '/' , element : <Home></Home>},
    {path : '/home' , element : <Home></Home>},
    {path : '/about' , element : <About></About>},
    {path : '/products' ,
    loader : async() => {
      return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
     },
     element : <Products></Products> },
    {path : '/blog' , element : <Blog></Blog>},
     {
      path : '/meal/:idMeal' , 
      loader : async({params}) => {
      return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
     },
     element : <SingleMeal></SingleMeal>}
  ] },
   {path : '*' , element : <div>This is 404 Error "NOT FOUND"</div>}
  ]);

  return (
    <div className="App">
     {/* <Meal></Meal> */}
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
