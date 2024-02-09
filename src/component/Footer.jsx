
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => (
    <div className="row justify-content-center mt-5" id='Footer'>
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-instagram footer-icon me-5"></i>
            <i className="bi bi-facebook footer-icon me-5"></i>
            <i className="bi bi-twitter-x footer-icon me-5"></i>
            <i className="bi bi-telegram footer-icon me-5"></i>
            <i className="bi bi-discord footer-icon me-5"></i>
            <i className="bi bi-snapchat footer-icon me-5"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">Privacy</a>
                </p>
                <hr />
                <p>
                  <a href="#" alt="footer link">Contact us</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">Investor Relations</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Legal Notices</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">Help Center</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Jobs</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Cookie Preferences</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">Terms of Use</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Corporate Information</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-text'>
            <p>We recognize our responsibility to use data and technology for good. <br /> We may use or share your data with our data vendors. <br /> Take control of your data.</p>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
              Rate Us
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 mt-2 copyright">
            © 2024 SkyChannel, Inc.
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Footer;