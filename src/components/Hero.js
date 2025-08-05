import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.3);

  return (
    <section 
      id="home"
      ref={heroRef}
      className={`min-vh-75 d-flex align-items-center text-white text-center ${isHeroVisible ? 'fade-in' : 'animate-on-scroll'}`}
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://bastikipathshala.org/wp-content/uploads/2024/02/IMG_6337-scaled.jpg") center/cover no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4 slide-in-left">
              Empowering Children Through Education
            </h1>
            <p className="lead mb-5 slide-in-right">
              Join us in our mission to break the barriers of education in underserved communities. 
              With your support, we can provide quality education to children living in slum areas, 
              empowering them with the knowledge and skills for a brighter future.
            </p>
            <button className="btn btn-warning btn-lg fw-semibold px-5 py-3 rounded-pill scale-in hover-pulse">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 