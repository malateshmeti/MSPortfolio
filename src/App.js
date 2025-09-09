import React from "react";
import MsPortfolioMain from "./components/MsPortfolioMain";
import MsSkills from "./components/MsSkills";
import MsExperience from "./components/MsExperience";
import MsProjects from "./components/MsProjects";
import MsContactForm from "./components/MsContactForm"; 


import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MsPortfolioMain />
      <MsSkills />   
      <MsExperience /> 
      <MsProjects /> 
      <MsContactForm /> 
    </div>
  );
}

export default App;

