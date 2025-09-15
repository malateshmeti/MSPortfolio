import React from "react";
import "./MsExperience.css";

const experiences = [
  {
    role: "Associate Software Development Engineer – E1",
    company: "Craft Silicon Asia, Bengaluru",
    duration: "Nov 2023 – Present (1.11 Years)",
    skills:
      "SQL Server, Database Design, Query Optimization, Stored Procedures, Performance Tuning, Java, Spring Boot, REST API, Git, MySQL, Postman",
    sections: [
      {
        title: "Core Work (SQL Server):",
        points: [
          "Specialized in SQL Server development, focusing on query optimization, stored procedures, and database performance tuning.",
          "Designed and managed efficient database schemas to support high-volume financial transactions.",
          "Enhanced transaction reliability and reduced processing delays by implementing indexing and query optimization strategies.",
          "Collaborated with cross-functional teams to ensure reliable, secure, and scalable financial data systems."
        ]
      },
      {
        title: "Backend Development & APIs:",
        points: [
          "Developed and secured REST APIs for financial operations using Spring Boot & Spring Security.",
          "Built loan management features like EMI scheduling, repayment tracking, and interest calculation.",
          "Optimized backend performance by reducing API response times through query tuning and caching strategies.",
          "Followed clean code principles, version control (Git), and API testing (Postman) to deliver production-ready modules."
        ]
      }
    ]
  },
  {
    role: "Salesforce Developer - Intern",
    company: "Utilitarians Labs, Bengaluru",
    duration: "Oct 2023 (1 Month)",
    skills: "Salesforce, Apex, SOQL, Lightning Components",
    sections: [
      {
        title: "Intern:",
        points: [
          "Gained hands-on experience in customizing Salesforce objects, fields, and workflows.",
          "Developed and tested basic Apex classes, triggers, and SOQL queries for data handling.",
          "Worked with Lightning components to improve UI features and user experience.",
          "Collaborated with senior developers on debugging, deployments, and project documentation."
        ]
      }
    ]
  }
];


function MsExperience() {
  return (
    <section className="ms-experience" id="experience">
      <div className="ms-experience-container">
        <h2 className="ms-experience-title">Experience</h2>

        <div className="ms-experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="ms-experience-card">
              <h3 className="ms-experience-role">{exp.role}</h3>
              <p className="ms-experience-company">
                {exp.company}{" "}
                <span className="ms-experience-duration">{exp.duration}</span>
              </p>
              <p className="ms-experience-skills">
                <strong>Skills:</strong> {exp.skills}
              </p>

              <ol className="ms-experience-points">
                {exp.sections.map((section, i) => (
                  <li key={i}>
                    <strong>{i + 1}) {section.title}</strong>
                    <ul>
                      {section.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MsExperience;
