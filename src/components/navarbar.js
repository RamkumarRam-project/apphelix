import React, { useState } from "react";


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);


   
  return (
   <>
               <nav className="navbar navbar-expand-lg nav-class text-light mt-5" >
    <div className="container">
      <a className="navbar-brand " href="#">
       <span className="text-white nav-font">
      app</span><span className="text-primary font-nav">helix</span><br/>
        <span className="text-white fs-4 imp-class">impactful Engineering</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">Partnerships</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary fs-5" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
        </nav>

   </>
  );
};

export default NavigationBar;
