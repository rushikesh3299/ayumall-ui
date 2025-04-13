import "./auth.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signupService } from "../../services/authService";

interface SignupFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswdVisible, setIsPasswdVisible] = useState({
    passwd: false,
    cpasswd: false,
  });

  const signupHandeler = async () => {
    const loginResp = await signupService(signupFormData);
    console.log("signup response", loginResp);
  };

  return (
    <div className="login-container">
      <img className="login-img" src="images/AyuMall.png" alt="Ayumall logo" />
      <h2>WelCome!</h2>
      <h3>Enter info below to create Account</h3>
      <form
        className="login-inputs"
        onSubmit={(e) => {
          e.preventDefault();
          signupHandeler();
        }}
      >
        <input
          type="text"
          className="first-name"
          placeholder="First Name"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, firstname: e.target.value })
          }
        />
        <input
          type="text"
          className="last-name"
          placeholder="Last Name"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, lastname: e.target.value })
          }
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          onChange={(e) =>
            setSignupFormData({ ...signupFormData, email: e.target.value })
          }
        />
        <div className="paswword-field">
          <input
            type={isPasswdVisible.passwd ? "text" : "password"}
            name="passwd"
            id="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setSignupFormData({ ...signupFormData, password: e.target.value })
            }
          />
          <span
            className="passwd-visible"
            onClick={() =>
              setIsPasswdVisible({
                ...isPasswdVisible,
                passwd: !isPasswdVisible.passwd,
              })
            }
          >
            {isPasswdVisible.passwd ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        <div className="paswword-field">
          <input
            type={isPasswdVisible.cpasswd ? "text" : "password"}
            name="confirm-passwd"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                confirmPassword: e.target.value,
              })
            }
          />
          <span
            className="passwd-visible"
            onClick={() =>
              setIsPasswdVisible({
                ...isPasswdVisible,
                cpasswd: !isPasswdVisible.cpasswd,
              })
            }
          >
            {isPasswdVisible.cpasswd ? (
              <i className="far fa-eye"></i>
            ) : (
              <i className="far fa-eye-slash"></i>
            )}
          </span>
        </div>
        {signupFormData.password != signupFormData.confirmPassword && (
          <p className="match-password">Passwords are not matching</p>
        )}
        <button className="login-btn">Sign Up</button>
        <div className="login-footer">
          <div>
            Already have Account? <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
