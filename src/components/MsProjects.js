import React from "react";
import "./MsProjects.css";

const projects = [
  {
    title: "Smart Loan Management & Reporting System",
    tech: "Java, Spring Boot, Spring Security, Hibernate, SQL, REST API, Git, JWT",
    points: [
      "Developed CRUD APIs for customer onboarding, loan creation, and repayment scheduling.",
      "Implemented loan eligibility, interest calculation, and EMI tracking features.",
      "Created secure role-based authentication and authorization using Spring Security & JWT.",
      "Optimized SQL queries and Hibernate mappings to improve transaction and report performance by ~30%.",
      "Built reporting APIs to provide real-time insights into loan performance, payment history, and outstanding balances.",
      "Added admin dashboards for monitoring loans, updating schedules, and generating summaries.",
      "Ensured data integrity and compliance by implementing transaction management and validation rules.",
      "Designed the system architecture for scalability, supporting future integration with third-party payment gateways and credit bureaus."
    ],
    github: "https://github.com/malateshmeti/BankingWebDev"
  },
  {
    title: "BringUp – Home Services Booking Platform",
    tech: "Java, Spring Boot, SQL, REST API, Git, Postman",
    points: [
      "Developed a platform connecting users with service agents (electricians, carpenters, plumbers, cleaners, painters).",
      "Designed REST APIs for booking services, assigning agents, and tracking job progress.",
      "Created database schema for users, services, and booking management with MySQL.",
      "Implemented service availability and scheduling logic for efficient job allocation.",
      "Integrated notification workflows to keep users and agents updated on booking status.",
      "Tested and documented APIs using Postman to ensure reliability and usability.",
      "Applied clean code practices and modular design, making the system maintainable and production-ready."
    ],
    github: "https://github.com/malateshmeti/BringUpWebApp"
  }
];


function MsProjects() {
  // Handler for Project Website button
  const handleWebsiteClick = () => {
    alert("Please connect with the developer to know project details.");
  };

  return (
    <section className="ms-projects" id="projects">
      <div className="ms-projects-container">
        <h2 className="ms-projects-title">Projects</h2>

        <div className="ms-projects-list">
          {projects.map((project, index) => (
            <div key={index} className="ms-project-card">
              <h3 className="ms-project-title">{project.title}</h3>
              <p className="ms-project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <ul className="ms-project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ms-project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-project-btn"
                >
                  🔗 GitHub
                </a>

                <button
                  className="ms-project-btn"
                  onClick={handleWebsiteClick}
                  style={{ marginLeft: "10px" }}
                >
                  🌐 Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MsProjects;
