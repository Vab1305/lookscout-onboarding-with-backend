import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {authenticateSignUp} from '../src/service/api'
import "./App.css";
 
const signUpinitialValues ={
    
  name:'',
  email:'',
  password:'',
}
const Home = () => {
  const [isDarkModeEnable, setIsDarkModeEnable] = useState(false);
  const [logoImage, setLogoImage] = useState(
    localStorage.getItem("logoImage") || "/assets/logo.svg"
  );
  const [buttonContent, setButtonContent] = useState("Next");
  const [signUp,setSignup] = useState(signUpinitialValues);
  const [isGotoAdmin,setIsGotoAdmin] = useState(false);

  const onInputChange = (e)=>{
      setSignup({...signUp,[e.target.name]:e.target.value});
      
  }
  

  useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkModeEnable(isDarkMode);
  }, []);
  const navigate= useNavigate();

  const handleLogoClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLogoImage(reader.result);
        localStorage.setItem("logoImage", reader.result);
      };
    });
    fileInput.click();
  };

  const handleButtonClick = () => {
    const shouldUpdateButtonContent = window.confirm("Do you want to update the button content?");
    if (shouldUpdateButtonContent) {
      const newContent = window.prompt("Enter new button content:", buttonContent);
      if (newContent) {
        setButtonContent(newContent);
      }
    } else {
      // move on to next page here
      
      
      signupUser();
      


    
    }
  };
  
  const signupUser = async()=>{
    if(signUp.name!='' && signUp.email!='' && signUp.password!='')
    { let response = await authenticateSignUp(signUp);
    if(!response)return;}
    
    navigate('/details');
   

}

  return (
    <div
      className="main"
      style={isDarkModeEnable ? { backgroundColor: "#1E1E1E" } : {}}
    >
      <div className="logo" onClick={handleLogoClick}>
        <img src={logoImage} alt="logo" />
      </div>
      <div
        className="form-wrapper"
        style={
          isDarkModeEnable
            ? { backgroundColor: "#1C2534", borderColor: "#252D3C" }
            : {}
        }
      >
        <div
          className="form-top-section"
          style={isDarkModeEnable ? { backgroundColor: "#252D3C" } : {}}
        >
          <div
            className="form-top-section__dotted-bar"
            style={isDarkModeEnable ? { borderColor: "#648EF7" } : {}}
          ></div>
          <div className="form-steps-wrap">
            <div className="form-step">
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/step-1-dark.svg"
                    : "/assets/lock-icon.svg"
                }
                alt="lock"
              />
              <div>Account</div>
            </div>
            <div className="form-step">
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/step-2-dark.svg"
                    : "/assets/person-icon.svg"
                }
                alt="person"
              />
              <div>Personal</div>
            </div>
            <div className="form-step">
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/step-3-dark.svg"
                    : "/assets/billing-icon.svg"
                }
                alt="billing"
              />
              <div>Billing</div>
            </div>
            <div className="form-step">
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/step-4-dark.svg"
                    : "/assets/done-icon.svg"
                }
                alt="done"
              />
              <div>Done</div>
            </div>
          </div>
        </div>
        <form
          className="form"
          style={isDarkModeEnable ? { backgroundColor: "#1c2534" } : {}}
        >
          <label htmlFor="name">
            <p
              style={
                isDarkModeEnable ? { color: "#F9F9F9" } : { color: "#000" }
              }
            >
              Name
            </p>
            <div className="input-wrap">
              <input
                id="name"
                type="text"
                onChange={onInputChange}
                name='name'
                placeholder="Enter you name"
                style={
                  isDarkModeEnable
                    ? {
                        backgroundColor: "#333B48",
                        borderColor: "#2E3545",
                        color: "#F9F9F9",
                      }
                    : {}
                }
              />
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/info-icon-white.svg"
                    : "/assets/info-icon.svg"
                }
                alt="info-icon"
              />
            </div>
          </label>
          <label htmlFor="email">
            <p style={isDarkModeEnable ? { color: "#F9F9F9" } : {}}>Email*</p>
            <div className="input-wrap">
              <input
                id="email"
                type="email"
                onChange={onInputChange}
                name='email'
                placeholder="Enter your email"
                required
                style={
                  isDarkModeEnable
                    ? {
                        backgroundColor: "#333B48",
                        borderColor: "#2E3545",
                        color: "#F9F9F9",
                      }
                    : {}
                }
              />
              <img
                src={
                  isDarkModeEnable
                    ? "/assets/info-icon-white.svg"
                    : "/assets/info-icon.svg"
                }
                alt="info-icon"
              />
            </div>
            <p style={isDarkModeEnable ? { color: "#A5ACBA" } : {}}>
              Please input a real Email Address
            </p>
          </label>
          <div className="password-wrap">
            <label htmlFor="password">
              <p style={isDarkModeEnable ? { color: "#F9F9F9" } : {}}>
                Password*
              </p>
              <div className="input-wrap">
                <input
                  id="password"
                  type="password"
                  onChange={onInputChange}
                  name='password'
                  placeholder="Enter your password"
                  required
                  style={
                    isDarkModeEnable
                      ? {
                          backgroundColor: "#333B48",
                          borderColor: "#2E3545",
                          color: "#F9F9F9",
                        }
                      : {}
                  }
                />
                <img
                  src={
                    isDarkModeEnable
                      ? "/assets/info-icon-white.svg"
                      : "/assets/info-icon.svg"
                  }
                  alt="info-icon"
                />
              </div>
              <p style={isDarkModeEnable ? { color: "#A5ACBA" } : {}}>
                Please enter your password
              </p>
            </label>
            <label htmlFor="confirm-password">
              <p style={isDarkModeEnable ? { color: "#F9F9F9" } : {}}>
                Confirm Password*
              </p>
              <div className="input-wrap">
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  style={
                    isDarkModeEnable
                      ? {
                          backgroundColor: "#333B48",
                          borderColor: "#2E3545",
                          color: "#F9F9F9",
                        }
                      : {}
                  }
                />
                <img
                  src={
                    isDarkModeEnable
                      ? "/assets/info-icon-white.svg"
                      : "/assets/info-icon.svg"
                  }
                  alt="info-icon"
                />
              </div>
              <p style={isDarkModeEnable ? { color: "#A5ACBA" } : {}}>
                Password need to match
              </p>
            </label>
          </div>
          <label htmlFor="terms" className="terms-checkbox">
            <input type="checkbox" id="terms" />
            <p style={isDarkModeEnable ? { color: "#fff" } : {}}>
              I accept the Terms and Privacy Policy
            </p>
          </label>
        </form>
        <div
          className="btn-wrap"
          style={isDarkModeEnable ? { backgroundColor: "#252D3C" } : {}}
        >
          <button onClick={handleButtonClick} key={buttonContent}>
          {buttonContent}
            {/* <p>Next</p> */}
            <img src="/assets/right-arrow.svg" alt="right-arrow" />
          </button>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
