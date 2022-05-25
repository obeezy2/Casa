import { Link, Routes, Route } from "react-router-dom";

import "../src/assets/scss/main.scss";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>Aircasa</h1>
        </Link>

      </header>
      <main>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={true}
                element={route.component}
              />
            );
          })}
        </Routes>
      </main>

      <footer>
        <h4>footer</h4>
      </footer>
    </div>
  );
}

export default App;
