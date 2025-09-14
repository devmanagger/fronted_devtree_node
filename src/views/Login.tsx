import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
 <h1 className='text-lg text-center text-white block'>Iniciar Sesion</h1>
        <nav className="mt-10">
            <Link
             className="text-center text-white text-lg block"
            to='/auth/register'>
              No account? Register here.
            </Link>
        </nav>


    </>
  )
}

export default Login
