import { Typography, css } from "@mui/material";
import React from "react";
import React from "../../assets/React.png";
import Figma from "../../assets/Figma.png";
import Js from "../../assets/js-file.png";
import html from "../../assets/html5.png";
import Css from "../../assets/css-3.png";
import Java from "../../assets/java.png";
import Spring from "../../assets/Spring.png";
import MongoDB from "../../assets/MDB.png";
import Azure from "../../assets/Azure.png";
import Postman from "../../assets/POSTMAN.png";
import Git from "../../assets/GIT.png";
import Proc from "../../assets/Proc.png";
import Bootstrap from "../../assets/bootstrap.png";
import SASS from "../../assets/SASS.png";
import Nodejs from "../../assets/nodejs.png";
import Tailwind from "../../assets/tailwind.png";
import SQL from "../../assets/sql-server.png";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "100px",
        }}
      >
        <div className="AboutCards">
          <Typography>FRONT END DEVELOPMENT</Typography>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap", padding: "5px" }}>
            <div>
              <img height="80px" alt="React" src={React}></img>
              <Typography>React</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Js}></img>
              <Typography>JavaScript</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={html}></img>
              <Typography sx={{ paddingLeft: "10px" }}>HTML</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Bootstrap}></img>
              <Typography>Bootstrap</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Css}></img>
              <Typography>CSS</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={SASS}></img>
              <Typography>SASS</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Figma}></img>
              <Typography sx={{ paddingLeft: "10px" }}>Figma</Typography>
            </div>
            <div>
              <img height="50px" alt="React" src={Tailwind}></img>
              <Typography sx={{ paddingLeft: "10px" }}>Tailwind</Typography>
            </div>
          </div>
        </div>
        <div className="AboutCards">
          <Typography>BACK END DEVELOPMENT</Typography>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <img height="80px" alt="React" src={Java}></img>
              <Typography>Java</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Nodejs}></img>
              <Typography>Nodejs</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Spring}></img>
              <Typography sx={{ paddingLeft: "10px" }}>Springboot</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={SQL}></img>
              <Typography sx={{ paddingLeft: "10px" }}>MySQL</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={MongoDB}></img>
              <Typography sx={{ paddingLeft: "10px" }}>MongoDB</Typography>
            </div>
          </div>
        </div>
        <div className="AboutCards">
          <Typography>MISCELLANEOUS </Typography>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <img height="80px" alt="React" src={Git}></img>
              <Typography>GIT</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Azure}></img>
              <Typography>Azure</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={Proc}></img>
              <Typography sx={{ paddingLeft: "10px" }}>Processing</Typography>
            </div>
            <div>
              <img height="80px" alt="React" src={SQL}></img>
              <Typography sx={{ paddingLeft: "10px" }}>Postman</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
