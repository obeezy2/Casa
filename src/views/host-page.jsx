import { Link } from "react-router-dom";

export const HostPage = () => {
  return (
    <section className="host-page-container become-host-layout">
      <Link to="/stay/edit">
        <h1>Try hosting</h1>
      </Link>
    </section>
  );
};
