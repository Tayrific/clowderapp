import { Link } from "react-router-dom";
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className="login">
            <div className="card">
               <div className="left">

                <h1>CLOWDER</h1>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>

               </div>
               <div className="right">

                <h1>Login</h1>
                
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                    <span>Forgot Password?</span>
                </form>

               </div>
            </div>
        </div>
    );
}

export default Login;