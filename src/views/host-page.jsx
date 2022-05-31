import { Link } from "react-router-dom";

export const HostPage = () => {
  return (
    <section className="host-page-container become-host-layout">

      <div className="host-img-container">
        <div className="host-img">
        </div>
      </div>
      <div className="host-action">
        <h1>Host your home on Casa


        </h1>
        <Link to="/dashboard">
          <button className='host-btn'>Get Started!</button>
        </Link>
      </div>

    </section >
  );
};
