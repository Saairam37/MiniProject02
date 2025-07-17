import { createBrowserRouter, RouterProvider } from 'react-router';
import RecipeDetails from './RecipeDetails';
import Home from './Home';
import ingLoaders from './loaders/units/ingLoaders';

const routes = [
  {
    path: "/",
    element: <Home/>,
    loader: ingLoaders,
  },
  {
    path:"/details/:id",
    element: <RecipeDetails/>,
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return (
    <RouterProvider 
    router={router}
    />
  )
}

export default App