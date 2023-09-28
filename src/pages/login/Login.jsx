import { useNavigate  } from "react-router-dom";
import "./login.scss"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
    }

    const [isSlide, setIsSlide] = useState(false);

    const handleSignUpClick = () => {
        setIsSlide(true);

        setTimeout(() => {
            navigate("/register");
          }, 1000); // Adjust the delay time (in milliseconds) as needed
    };

    useEffect(() => {
        // Add the 'fade-in' class when the component mounts
        const loginForm = document.querySelector(".LoginForm");
        const loginDiv = document.querySelector(".left");
        loginForm.classList.add("fade-in");
        loginDiv.classList.add("fade-in");

        loginForm.addEventListener("animationend", () => {
            loginForm.classList.remove("fade-in");
          });
        
          // Make sure to clean up the event listener when the component unmounts
          return () => {
            loginForm.removeEventListener("animationend", () => {
                loginForm.classList.remove("fade-in");
            });
          };
      }, []);

    return (

        <div className="login">
            <div className={`card ${isSlide ? "slide" : ""}`}>
               <div className={`left ${isSlide ? "slide" : ""}`}>

                <h1>CLOWDER</h1>
                <span>Don't have an account?</span>
                <button onClick={handleSignUpClick}>Register</button>

               </div>
               <div className={`right ${isSlide ? "slide" : ""}`}>


                
                <form className="LoginForm">
                <h1>Login</h1>
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