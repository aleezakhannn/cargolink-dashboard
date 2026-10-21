import React, { useState, useEffect } from 'react';
import './App.css';
import sampleData from './gapsData.json';

function App() {
  const [gaps, setGaps] = useState([]);

  useEffect(() => {
    setGaps(sampleData.gaps || []);
  }, []);

  // Dynamically calculate counts based on the gaps array
  const totalGaps = gaps.length;
  const highPriorityCount = gaps.filter(g => g.priority === 'High').length;
  const mediumPriorityCount = gaps.filter(g => g.priority === 'Medium').length;
  const lowPriorityCount = gaps.filter(g => g.priority === 'Low').length;

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>CargoLink Remediation Dashboard</h1>
        <p>Overview of security controls, remediation actions, start dates, and due dates.</p>
      </header>

      {/* Metric Cards Section (Now dynamically calculated!) */}
      <section className="metrics-grid">
        <div className="metric-card">
          <h3>Total Gaps Identified</h3>
          <p className="metric-value">{totalGaps}</p>
        </div>
        <div className="metric-card">
          <h3>High Priority</h3>
          <p className="metric-value danger">{highPriorityCount}</p>
        </div>
        <div className="metric-card">
          <h3>Medium Priority</h3>
          <p className="metric-value warning">{mediumPriorityCount}</p>
        </div>
        <div className="metric-card">
          <h3>Low Priority</h3>
          <p className="metric-value info">{lowPriorityCount}</p>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="progress-section">
        <div className="progress-header">
          <h3>Remediation Progress</h3>
          <span>25% Complete</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '25%' }}></div>
        </div>
      </section>

      {/* Remediation Table Section */}
      <section className="table-section">
        <h2>Remediation Table</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Gap (Control)</th>
                <th>Remediation Action</th>
                <th>Owner</th>
                <th>Priority</th>
                <th>Start</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {gaps.map((gap) => (
                <tr key={gap.id}>
                  <td><strong>{gap.id}</strong></td>
                  <td className="control-cell">{gap.control}</td>
                  <td>{gap.action}</td>
                  <td>{gap.owner}</td>
                  <td>{gap.priority}</td>
                  <td className="date-cell">{gap.startDate}</td>
                  <td className="date-cell">{gap.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;