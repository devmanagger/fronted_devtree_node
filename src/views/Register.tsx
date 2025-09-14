import { Link } from 'react-router-dom'
const Register = () => {
  return (
       <>
    <div className="">
        <nav>
            <Link to='/auth/login'>
                Already have an account? Login here.
            </Link>
        </nav>
    </div>

    </>
  )
}

export default Register
