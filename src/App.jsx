
import { createBrowserRouter, createRoutesFromChildren, Route, Router, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route index element = {<LandingPage/>}/>
    </Route>
  )
)

export default function App() {
  return (
   <RouterProvider router = {router}/>
  );
}