import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();
  const state = location.state;

  console.log("ErrorPage", state);
  return (
    <div className="error-page-container taC p30">
      <div className="error-page-title fs40 fw900">404</div>
      <div className="error-page-text fs25 fw600 p10">Page NOT Found</div>
      <NavLink className="fw600" to="/">
        Return to HomePage
      </NavLink>
    </div>
  );
};
