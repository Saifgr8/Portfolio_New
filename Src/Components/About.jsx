import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import exp from "../../assets/experience.png";
import Edu from "../../assets/education.png";
import GOAL from "../../assets/GOAL.webp";

function About() {
  return (
    <div  id="about" style={{ height: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div >
          <Typography variant="body1">Get To Know Me More</Typography>
          <Typography sx={{ marginLeft: "30px" }} variant="h5">
            About Me
          </Typography>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ margin: "100px" }} className="AboutCards">
          <img height="100px" src={GOAL}></img>
          <div style={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bold" }}>Summary</Typography>
            <br />
            <Typography>
              A fresh graduate and a software professional with good experience
              in Front End, Back End, and Database, along with a clear
              understanding of Deployment and Version Control. Seeking a
              full-time job as a Software Developer.
            </Typography>
          </div>
        </div>
        <div style={{ margin: "100px" }} className="AboutCards">
          <img height="100px" src={Edu}></img>
          <div style={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bold" }}>Education</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>University of Bristol</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              MSc Computer Science
            </Typography>
            <Typography>London, UK</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>Osmania University</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
             B.E Electrical and Electronics Engineering
            </Typography>
            <Typography>Hyderabad, India</Typography>
          </div>
        </div>
        <div style={{ margin: "100px" }} className="AboutCards">
          <img height="100px" src={exp}></img>
          <div style={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bold" }}>Experience</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>MindQube Tech</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              Software Developer Intern
            </Typography>
            <Typography>London, UK</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>Accenture</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              Workday Inegration Consultant
            </Typography>
            <Typography>Hyderabad, India</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
