import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    availability: '',
    interests: [],
    experience: '',
    motivation: '',
    skills: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [volunteerRef, isVolunteerVisible] = useScrollAnimation(0.2);

  const volunteerAreas = [
    'Teaching & Tutoring',
    'Administrative Support',
    'Event Planning',
    'Fundraising',
    'Technology Support',
    'Community Outreach',
    'Mentoring',
    'Translation Services',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(item => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section className="min-vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor: '#FBF6ED'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="bg-white p-5 rounded-4 shadow-lg text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '96px', height: '96px'}}>
                  <i className="fas fa-heart text-success" style={{fontSize: '3rem'}}></i>
                </div>
                <h2 className="h1 fw-bold mb-4">Thank You!</h2>
                <p className="lead mb-5">
                  Your volunteer application has been received. We'll get back to you within 2-3 business days 
                  to discuss the next steps in your journey with Basti Ki Pathshala Foundation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-warning fw-semibold px-4 py-2"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" ref={volunteerRef} className={`py-5 bg-light-custom ${isVolunteerVisible ? 'fade-in' : 'animate-on-scroll'}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4 scale-in">Join Our Volunteer Family</h1>
          <p className="lead text-muted slide-in-left">
            Ready to make a difference? Fill out this form to start your journey as a volunteer 
            with Basti Ki Pathshala Foundation. Every skill and passion has a place in our mission.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="bg-white p-4 rounded-3 shadow-sm text-center h-100 hover-float">
              <i className="fas fa-calendar text-warning mb-3 pulse" style={{fontSize: '2rem'}}></i>
              <h3 className="h5 fw-bold mb-2">Flexible Schedule</h3>
              <p className="text-muted small mb-0">Volunteer on your own terms</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-4 rounded-3 shadow-sm text-center h-100 hover-float">
              <i className="fas fa-clock text-warning mb-3 pulse" style={{fontSize: '2rem'}}></i>
              <h3 className="h5 fw-bold mb-2">Meaningful Impact</h3>
              <p className="text-muted small mb-0">See the direct results of your work</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-4 rounded-3 shadow-sm text-center h-100 hover-float">
              <i className="fas fa-heart text-warning mb-3 pulse" style={{fontSize: '2rem'}}></i>
              <h3 className="h5 fw-bold mb-2">Community</h3>
              <p className="text-muted small mb-0">Join like-minded changemakers</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4 d-flex align-items-center">
                    <i className="fas fa-user text-warning me-3"></i>
                    Personal Information
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4 d-flex align-items-center">
                    <i className="fas fa-envelope text-warning me-3"></i>
                    Contact Information
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Street address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your city"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4 d-flex align-items-center">
                    <i className="fas fa-clock text-warning me-3"></i>
                    Availability
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">How much time can you commit? *</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select your availability</option>
                        <option value="2-4 hours/week">2-4 hours per week</option>
                        <option value="5-8 hours/week">5-8 hours per week</option>
                        <option value="9-15 hours/week">9-15 hours per week</option>
                        <option value="16+ hours/week">16+ hours per week</option>
                        <option value="project-based">Project-based (flexible)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Areas of Interest</h2>
                  <p className="text-muted mb-4">Select all areas where you'd like to contribute:</p>
                  <div className="row g-3">
                    {volunteerAreas.map((area) => (
                      <div key={area} className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={area}
                            checked={formData.interests.includes(area)}
                            onChange={() => handleCheckboxChange(area)}
                          />
                          <label className="form-check-label" htmlFor={area}>
                            {area}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Relevant Experience (Optional)
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-control"
                      placeholder="Tell us about any relevant experience you have in education, volunteering, or related fields..."
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Skills & Talents
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-control"
                      placeholder="What skills, talents, or expertise would you like to share? (e.g., languages, technology, arts, etc.)"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Why do you want to volunteer with us? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-control"
                      placeholder="Share your motivation and what you hope to achieve through volunteering..."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-warning btn-lg fw-bold px-5 py-3 hover-pulse">
                    <i className="fas fa-paper-plane me-3"></i>
                    Submit Application
                  </button>
                  <p className="text-muted mt-3">
                    We'll review your application and get back to you within 2-3 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm; 