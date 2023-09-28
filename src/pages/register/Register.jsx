import { useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import "./register.scss"

const Register = () => {

    const navigate = useNavigate();
    const [isSlide, setIsSlide] = useState(false);

    const handleSignUpClick = () => {    
        setIsSlide(true);

        setTimeout(() => {
            navigate("/logIn");
          }, 1000); // Adjust the delay time (in milliseconds) as needed
    };

    useEffect(() => {
        // Add the 'fade-in' class when the component mounts
        const regForm = document.querySelector(".regForm");
        const regDiv = document.querySelector(".right");
        regForm.classList.add("fade-in");
        regDiv.classList.add("fade-in");

        regForm.addEventListener("animationend", () => {
            regForm.classList.remove("fade-in");
          });
        
          // Make sure to clean up the event listener when the component unmounts
          return () => {
            regForm.removeEventListener("animationend", () => {
              regForm.classList.remove("fade-in");
            });
          };
        

      }, []);

    return (
        <div className="register">
             <div className={`card ${isSlide ? "slide" : ""}`}>
               <div className={`left ${isSlide ? "slide" : ""}`}>
               
                <form className="regForm" >
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />

                    <button>Register</button>
                </form>
               </div>

               <div className={`right ${isSlide ? "slide" : ""}`}>
                    <h1>CLOWDER</h1>
                    <span>Already have an account?</span>
                    <button onClick={handleSignUpClick}>Login</button>
               </div>

            </div>
        </div>
    );
}

export default Register;