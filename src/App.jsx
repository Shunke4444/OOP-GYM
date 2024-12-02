
import { createBrowserRouter, createRoutesFromChildren, Route, Router, RouterProvider } from 'react-router-dom';
import Profilepage from './pages/Profilepage';
import Dashboard from './pages/Dashboard';
import Exercise from './pages/Exercise'
import Logout from './pages/Logout'
import Mealplan from './pages/Mealplan'
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route index element = {<Dashboard/>}/>
      <Route path = "/home" element = {<Dashboard/>}/>
      <Route path='/profile' element = {<Profilepage/>}/>
      <Route path='/exercise' element = {<Exercise/>}/>
      <Route path='/mealplan' element = {<Mealplan/>}/>
      <Route path='/logout' element = {<Logout/>}/>
    </Route>
  )
)

export default function App() {
  return (
   <RouterProvider router = {router}/>
  );
}