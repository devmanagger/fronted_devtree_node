import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'
export const AppRouter = () => {
    //auth/register
    //auth/login
  return (
    <BrowserRouter>
        {/* Your routes and components go here */}
        <Routes>
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/register" element={<Register/>} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </BrowserRouter>
  )
}
