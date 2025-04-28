import "./userProfile.css";
import { logoutService } from "../../services";
import { useDispatch } from "react-redux";
import { RootState, removeUserData } from "../../store";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const userData = useTypedSelector((state) => state.auth);
  const logoutHandler = async () => {
    try {
      await logoutService();
      dispatch(removeUserData());
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
      //   toast for failure
    }
  };
  return (
    <>
      <div className="profile-container">
        <h2 className="profile-title">My Account</h2>
        <div className="logout-btn-container">
          <button onClick={() => logoutHandler()} className="logout-btn">
            Logout
          </button>
        </div>
        <div className="profile-details-container">
          <div className="profile-details">
            <div>First Name: </div>
            <div>{userData.firstname}</div>
          </div>
          <div className="profile-details">
            <div>Last Name: </div>
            <div>{userData.lastname}</div>
          </div>
          <div className="profile-details">
            <div>Email Id: </div>
            <div>{userData.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
