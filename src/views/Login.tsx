import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>

        <nav>
            <Link to='/auth/register'>
              No account? Register here.
            </Link>
        </nav>


    </>
  )
}

export default Login
