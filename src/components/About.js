import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [aboutRef, isAboutVisible] = useScrollAnimation(0.2);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);
  const [textRef, isTextVisible] = useScrollAnimation(0.4);

  return (
    <section id="about" ref={aboutRef} className={`py-5 bg-light-custom ${isAboutVisible ? 'fade-in' : 'animate-on-scroll'}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold position-relative scale-in">
            About Us
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x mt-3"
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#ffcd05'
              }}
            ></div>
          </h2>
        </div>
        
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div ref={imageRef} className={`rounded-3 overflow-hidden shadow-lg ${isImageVisible ? 'slide-in-left' : 'animate-on-scroll'}`}>
              <img 
                src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG-20240216-WA0047-576x1024.jpg" 
                alt="Children Learning" 
                className="img-fluid w-100"
              />
            </div>
          </div>
          
          <div ref={textRef} className={`col-lg-6 ${isTextVisible ? 'slide-in-right' : 'animate-on-scroll'}`}>
            <h3 className="h2 fw-bold mb-4">
              We Believe Every Child Deserves Quality Education
            </h3>
            <p className="mb-4">
              Basti Ki Pathshala Foundation is a non-profit organization dedicated to providing quality 
              education to children in underserved communities. We work in urban slums where educational 
              opportunities are limited or non-existent.
            </p>
            <p className="mb-4">
              Our mission is to create learning environments that nurture curiosity, critical thinking, 
              and creativity. We believe education is the most powerful tool to break the cycle of poverty 
              and transform lives.
            </p>
            <p className="mb-5">
              Since our inception in 2015, we've educated over 5,000 children, trained 200+ teachers, 
              and established 15 learning centers across the country.
            </p>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="bg-white p-4 rounded-3 shadow-sm h-100 hover-float">
                  <i className="fas fa-bullseye text-warning mb-3 pulse" style={{fontSize: '2rem'}}></i>
                  <h4 className="h5 fw-bold mb-3">Our Mission</h4>
                  <p className="mb-0">
                    To provide quality education to every child in underserved communities, 
                    regardless of their socio-economic background.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-white p-4 rounded-3 shadow-sm h-100 hover-float">
                  <i className="fas fa-eye text-warning mb-3 pulse" style={{fontSize: '2rem'}}></i>
                  <h4 className="h5 fw-bold mb-3">Our Vision</h4>
                  <p className="mb-0">
                    A world where every child has access to education that empowers them 
                    to reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 