import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'
import { AuthLayou } from '../layout/AuthLayou'
export const AppRouter = () => {
    //auth/register
    //auth/login
  return (
    <BrowserRouter>
        {/* Your routes and components go here */}
        <Routes>
            <Route element={<AuthLayou/>}>
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/auth/register' element={<Register/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
