import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { showUserMsg, showErrorMsg } from "../services/event-bus.service";

export const HostPage = () => {
  const navigator = useNavigate();
  const { user } = useSelector((storeState) => storeState.userModule);
  const validateLogin = () => {
    if (!user) {
      showUserMsg("Please login", "not-logged-in");
    } else {
      navigator("/dashboard");
    }
  };
  return (
    <section className="host-page-container become-host-layout">
      <div className="host-img-container">
        <div className="host-img"></div>
      </div>
      <div className="host-action">
        <h1>Host your home on Casa</h1>
        <button className="host-btn" onClick={validateLogin}>
          Get Started!
        </button>
      </div>
    </section>
  );
};
