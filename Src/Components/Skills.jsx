import { Typography, css } from "@mui/material";
import React from "react";
import React from "../../assets/React.png"; //fend
import './About.css';
import SkillsNew from "./SkillsNew";


function Skills() {
  return (
    <div id="skills" style={{ height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "100px" }}>
          <Typography variant="body1">Peek Into My</Typography>
          <Typography variant="h5" sx={{ marginLeft: "5px" }}>
            SKILLS
          </Typography>
        </div>
      </div>
      <SkillsNew />
    </div>
  );
}

export default Skills;
