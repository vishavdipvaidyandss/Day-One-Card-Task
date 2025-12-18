import React from "react";

const About = () => {
  return (
    <>
      {/* Inline CSS */}
      <style>
        {`
          .about-container {
            padding: 60px 20px;
            background: linear-gradient(135deg, #f8f9fa, #eef1f5);
            animation: fadeIn 1.2s ease-in;
          }

          .about-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(90deg, #ff4ecd, #7b2ff7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
          }

          .about-subtitle {
            text-align: center;
            color: #555;
            max-width: 700px;
            margin: 0 auto 50px;
            font-size: 1.1rem;
          }

          .about-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
            overflow: hidden;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .about-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          }

          .about-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .about-card:hover img {
            transform: scale(1.1);
          }

          .about-content {
            padding: 25px;
          }

          .about-content h4 {
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }

          .about-content p {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .about-title {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* About Section */}
      <div className="about-container">
        <h2 className="about-title">About Employee Task Manager</h2>
        <p className="about-subtitle">
          Employee Task Manager is a modern web application designed to
          efficiently manage employee tasks, improve productivity, and ensure
          smooth collaboration between teams and managers.
        </p>

        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-card">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="task management"
                />
                <div className="about-content">
                  <h4>Task Assignment</h4>
                  <p>
                    Managers can assign tasks to employees, set priorities, and
                    track progress in real-time using an intuitive dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-card">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                  alt="team collaboration"
                />
                <div className="about-content">
                  <h4>Team Collaboration</h4>
                  <p>
                    Employees can collaborate easily, update task status, and
                    communicate efficiently, improving overall team workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-card">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                  alt="analytics"
                />
                <div className="about-content">
                  <h4>Performance Tracking</h4>
                  <p>
                    The system provides insights and reports to help managers
                    analyze employee performance and project completion rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
