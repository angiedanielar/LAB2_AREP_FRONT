import React from 'react';
import SignUp from './SignUp';

function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Stadistic <span>Calculator</span></a>
        </div>
      </nav>
      <div className="overlay home-background ">
        <SignUp></SignUp>
      </div>
    </div>
  );
}


export default App;
