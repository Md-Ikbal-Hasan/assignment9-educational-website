import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Main from './layouts/Main';
import Error from './components/Error/Error';
import QuizeDetails from './components/QuizeDetails/QuizeDetails';

function App() {
  // const quizeapi  ="https://openapi.programming-hero.com/api/quiz/${id}"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      children: [
        {
          path: "/",
          element: <Home></Home>
        },

        {
          path: "/:id",
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizeDetails></QuizeDetails>
        },

        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
