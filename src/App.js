import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Main from './layout/Main';
import Quis from './Components/quis/Quis';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',

      element: <Main></Main>,

      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/Topics',
          element: <Topics></Topics>
        },
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },

      ]
    },
    {

      path: '/:quisId',
      loader: async ({ params }) => {
        // console.log(params.quisId)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quisId}`)
      },
      element: <Quis></Quis>

    },
    {
      path: '*',
      element: <div>there is no route on this name</div>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
