// App.js
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero-section">
        <div className="overlay">
          <h1>CI/CD Pipeline with GitHub Actions</h1>
          <p className="subtitle">
            Automating React Application Deployment with Testing, Docker,
            GitHub Container Registry, and Deployment Notifications
          </p>

          <div className="card">
            <h2>Project Overview</h2>
            <p>
              This project demonstrates the implementation of an automated
              Continuous Integration and Continuous Deployment (CI/CD) pipeline
              using GitHub Actions for React applications.
            </p>

            <p>
              The workflow includes automated testing on pull requests, Docker
              image creation, pushing images to GitHub Container Registry, and
              Slack notifications for successful deployments.
            </p>

            <div className="features">
              <div className="feature-box">
                <h3>Automated Testing</h3>
                <p>Runs test cases automatically on every PR and commit.</p>
              </div>

              <div className="feature-box">
                <h3>Docker Deployment</h3>
                <p>
                  Builds and pushes Docker images with latest and commit SHA
                  tags.
                </p>
              </div>

              <div className="feature-box">
                <h3>Slack Alerts</h3>
                <p>
                  Sends deployment notifications for successful production
                  releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;