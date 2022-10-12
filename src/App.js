// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
            element:<Home></Home>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path:'/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/about',
            element: <About></About>

          }
        ]
      }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
