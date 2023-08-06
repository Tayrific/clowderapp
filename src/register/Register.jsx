import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
             <div className="card">
               <div className="left">
               <h1>Create Account</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />

                    <button>Register</button>
                </form>
               </div>

               <div className="right">
               <h1>CLOWDER</h1>
                <span>Already have an account?</span>
                <Link to="/login">
                <button>Login!</button>
                </Link>

               </div>
            </div>
        </div>
    );
}

export default Register;