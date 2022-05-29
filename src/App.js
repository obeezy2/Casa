import { Link, Routes, Route } from "react-router-dom";
import React from 'react'
import "../src/assets/scss/main.scss";
import routes from "./routes";
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer.jsx'
import { StayFilter } from './cmps/stay-filter.jsx'


function App() {
  return (
    <div className="App">
      <main className="main-content">
        <AppHeader />

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
        <AppFooter />

      </main>

    </div>
  );
}

export default App;
