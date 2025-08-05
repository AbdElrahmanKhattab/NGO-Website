import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky-top">
      <div className="px-3">
        <div className="d-flex justify-content-around align-items-center py-3">
          <div className="d-flex align-items-center">
            <i className="fas fa-book-open text-warning me-3" style={{fontSize: '36px'}}></i>
            <h1 className="h5 mb-0 fw-bold">
              Basti Ki <span className="text-warning">Pathshala</span>
            </h1>
          </div>
          
          <nav className="d-none d-md-block">
            <ul className="nav mb-0">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className="nav-link fw-medium text-dark active"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a 
                  href="#about" 
                  className="nav-link fw-medium text-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#volunteer" 
                  className="nav-link fw-medium text-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('volunteer');
                  }}
                >
                  Volunteer
                </a>
              </li>
             
            </ul>
          </nav>
          
          <button className="btn btn-warning fw-semibold px-4 py-2 rounded-pill">
            Donate Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 