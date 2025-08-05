import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Counting animation hook
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (isAnimating) {
        const startTime = Date.now();
        const startValue = 0;

        const animate = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
            setIsAnimating(false);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isAnimating, end, duration]);

    const startAnimation = () => {
      setIsAnimating(true);
    };

    return { count, startAnimation, isAnimating };
  };

  // Individual count-up hooks for each stat
  const { count: childrenCount, startAnimation: startChildrenAnimation } = useCountUp(31245);
  const { count: centersCount, startAnimation: startCentersAnimation } = useCountUp(28976);
  const { count: volunteersCount, startAnimation: startVolunteersAnimation } = useCountUp(19854);
  const { count: scholarshipsCount, startAnimation: startScholarshipsAnimation } = useCountUp(10989);

  // Intersection Observer for triggering animation when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Start all animations
            startChildrenAnimation();
            startCentersAnimation();
            startVolunteersAnimation();
            startScholarshipsAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated, startChildrenAnimation, startCentersAnimation, startVolunteersAnimation, startScholarshipsAnimation]);

  return (
    <section 
      className="" 
      ref={statsRef}
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://bastikipathshala.org/wp-content/uploads/2024/02/IMG_0189-1-scaled.jpg") center/cover no-repeat',
        backgroundAttachment: 'fixed',
        padding: '100px',
      }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="text-center text-white">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="display-4 fw-bold text-warning">
                  {childrenCount.toLocaleString()}
                </span>
              </div>
              <div className="h5 fw-semibold">Life Changed</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center text-white">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="display-4 fw-bold text-warning">
                  {centersCount.toLocaleString()}
                </span>
              </div>
              <div className="h5 fw-semibold">Meals Served</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center text-white">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="display-4 fw-bold text-warning">
                  {volunteersCount.toLocaleString()}
                </span>
              </div>
              <div className="h5 fw-semibold">Interns</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center text-white">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="display-4 fw-bold text-warning">
                  {scholarshipsCount.toLocaleString()}
                </span>
              </div>
              <div className="h5 fw-semibold">Supporters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 