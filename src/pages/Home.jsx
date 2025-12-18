import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container mt-5">
        <div className="row g-4 justify-content-center text-center">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="profile-card">
              <div className="image-border">
                <div className="image-circle">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                    alt="user"
                  />
                </div>
              </div>

              <div className="card-body">
                <h5 className="user-name">Danila Admas</h5>
                <p className="user-role">Software Engineer</p>
                <address className="user-address">
                  New York, <span>NA</span>
                </address>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="profile-card">
              <div className="image-border">
                <div className="image-circle">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/125.jpg"
                    alt="user"
                  />
                </div>
              </div>

              <div className="card-body">
                <h5 className="user-name">Lisa Darman</h5>
                <p className="user-role">Project Manager</p>
                <address className="user-address">
                  San Francisco, <span>CA</span>
                </address>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="profile-card">
              <div className="image-border">
                <div className="image-circle">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/222.jpg"
                    alt="user"
                  />
                </div>
              </div>

              <div className="card-body">
                <h5 className="user-name">Danila Admas</h5>
                <p className="user-role">Designer</p>
                <address className="user-address">
                  Austin, <span>TX</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
