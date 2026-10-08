import React from "react";
import "./App.css";

const builds = [
  {
    id: "#1042",
    branch: "main",
    commit: "Fix authentication issue",
    author: "John Doe",
    status: "Success",
    time: "2 min ago",
  },
  {
    id: "#1041",
    branch: "feature/payment",
    commit: "Add payment gateway",
    author: "Sarah Smith",
    status: "Failed",
    time: "18 min ago",
  },
  {
    id: "#1040",
    branch: "develop",
    commit: "Update dashboard UI",
    author: "Alex Johnson",
    status: "Success",
    time: "35 min ago",
  },
  {
    id: "#1039",
    branch: "feature/profile",
    commit: "Add user profile",
    author: "Mike Brown",
    status: "Running",
    time: "1 hour ago",
  },
];

function StatusBadge({ status }) {
  return (
    <span className={`badge ${status.toLowerCase()}`}>
      {status}
    </span>
  );
}

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">CI</div>
          <span>DevPipeline</span>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Projects</a>
          <a>Builds</a>
          <a>Branches</a>
          <a>Deployments</a>
          <a>Settings</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-avatar">JD</div>
          <div>
            <strong>John Doe</strong>
            <small>Developer</small>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="header">
          <div>
            <h1>CI Dashboard</h1>
            <p>Monitor your builds, tests and deployments.</p>
          </div>

          <button className="run-button">
            + Run Pipeline
          </button>
        </header>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon blue">↗</div>
            <div>
              <span>Total Builds</span>
              <h2>1,284</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <span>Successful</span>
              <h2>1,146</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">!</div>
            <div>
              <span>Failed</span>
              <h2>138</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">⚡</div>
            <div>
              <span>Success Rate</span>
              <h2>89.2%</h2>
            </div>
          </div>
        </section>

        {/* Current Pipeline */}
        <section className="card pipeline-card">
          <div className="section-header">
            <div>
              <h2>Current Pipeline</h2>
              <p>Build #1042 · main</p>
            </div>

            <StatusBadge status="Success" />
          </div>

          <div className="pipeline">
            <div className="stage completed">
              <div className="stage-circle">✓</div>
              <div>
                <strong>Checkout</strong>
                <small>12 sec</small>
              </div>
            </div>

            <div className="line completed-line" />

            <div className="stage completed">
              <div className="stage-circle">✓</div>
              <div>
                <strong>Install</strong>
                <small>34 sec</small>
              </div>
            </div>

            <div className="line completed-line" />

            <div className="stage completed">
              <div className="stage-circle">✓</div>
              <div>
                <strong>Test</strong>
                <small>1 min 24 sec</small>
              </div>
            </div>

            <div className="line completed-line" />

            <div className="stage completed">
              <div className="stage-circle">✓</div>
              <div>
                <strong>Build</strong>
                <small>48 sec</small>
              </div>
            </div>

            <div className="line completed-line" />

            <div className="stage completed">
              <div className="stage-circle">✓</div>
              <div>
                <strong>Deploy</strong>
                <small>32 sec</small>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Builds */}
        <section className="card">
          <div className="section-header">
            <div>
              <h2>Recent Builds</h2>
              <p>Latest CI pipeline executions</p>
            </div>

            <button className="view-button">View All</button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Build</th>
                  <th>Branch</th>
                  <th>Commit</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {builds.map((build) => (
                  <tr key={build.id}>
                    <td>
                      <strong>{build.id}</strong>
                    </td>

                    <td>
                      <span className="branch">
                        ⑂ {build.branch}
                      </span>
                    </td>

                    <td>{build.commit}</td>

                    <td>
                      <div className="author">
                        <div className="mini-avatar">
                          {build.author
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        {build.author}
                      </div>
                    </td>

                    <td>
                      <StatusBadge status={build.status} />
                    </td>

                    <td className="time">{build.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;