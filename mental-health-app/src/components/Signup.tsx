import React from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => (
  <section className="SignUp" id="signup">
    <div className="signup-container">
      <div className="signup-layout">
        <div className="signup-form-section">
          <div className="signup-card">
            <div className="header">Create Account</div>
            <form className="signup-form" id="signupForm">
              <div className="form-group">
                <input type="text" name="name" id="signupName" placeholder="Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" id="signupEmail" placeholder="Email" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="password" name="password" id="signupPassword" placeholder="Password" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" className="form-input" required />
              </div>
              <Link to="/dashboard" className="btn">Sign Up</Link>
            </form>
            <div className="switch-auth">
              Already have an account? <Link to="/">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Signup; 