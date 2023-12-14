import { Button, Typography, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import "./About.css";
import KYF from "../../assets/KYFporto.png";
import React from "../../assets/React.png";
import Figma from "../../assets/Figma.png";
import Js from "../../assets/js-file.png";
import html from "../../assets/html5.png";
import Css from "../../assets/css-3.png";
import Java from "../../assets/java.png";
import Java from "../../assets/java.png";
import Spring from "../../assets/Spring.png";
import MongoDB from "../../assets/MDB.png";
import Azure from "../../assets/Azure.png";
import Postman from "../../assets/POSTMAN.png";
import Git from "../../assets/GIT.png";
import Proc from "../../assets/Proc.png";
import WDpool from "../../assets/WDPOOL.png";
import YT from "../../assets/YTLOGO.png";
import YTPorj from "../../assets/YT.png";
import Tailwind from "../../assets/tailwind.png"; //FEND


function Projects() {
  return (
    <div id="projects">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "100px" }}>
          <Typography variant="body1">Browse My Recent</Typography>
          <Typography sx={{ marginLeft: "25px" }} variant="h5">
            Projects
          </Typography>
        </div>
      </div>

      <div className="ProjectCards">
        <div style={{ display: "flex" }}>
          <img height="350px" src={KYF}></img>
          <div>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", padding: "5px" }}
            >
              KNOW YOUR FOOD
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                padding: "15px",
                textAlign: "justify",
              }}
            >
              A full stack web deployed app contributing to the health and
              fitness industry. Users can browse among 1000s of food items, set
              goal, create recipes and track progess.
            </Typography>
            <Typography sx={{ padding: "5px" }}>Tech used:</Typography>
            <div style={{ padding: "5px" }}>
              <img height="50px" alt="React" src={React}></img>
              <img height="50px" alt="Figma" src={Figma}></img>
              <img height="50px" alt="JavaScript" src={Js}></img>
              <img height="50px" alt="HTML" src={html}></img>
              <img height="50px" alt="CSS" src={Css}></img>
              <img height="50px" alt="Java" src={Java}></img>
              <img height="50px" alt="Spring" src={Spring}></img>
              <img height="50px" alt="MongoDB" src={MongoDB}></img>
              <img height="50px" alt="Azure" src={Azure}></img>
              <img height="50px" alt="POSTMAN" src={Postman}></img>
              <img height="50px" alt="Git" src={Git}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                href="https://kyf-frontend.azurewebsites.net/"
                variant="contained"
              >
                Demo
              </Button>
              <Button
                href="https://github.com/Saifgr8/Kyf-frontend"
                variant="contained"
              >
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectCards">
        <div style={{ display: "flex" }}>
          <img height="350px" src={YTPorj}></img>
          <div>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", padding: "5px" }}
            >
              YouTube Clone
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                padding: "10px",
                textAlign: "justify",
              }}
            >
              Created a fully functional clone of YouTube from scratch.
              Implemented industry-standard practices like API Management, Redux
              and RTK, Caching api, Debouncing, Nested Comments and API Polling.
            </Typography>
            <Typography>Tech used:</Typography>
            <div style={{ padding: "20px" }}>
              <img height="50px" alt="React" src={React}></img>
              <img height="50px" alt="JavaScript" src={Js}></img>
              <img height="50px" alt="HTML" src={html}></img>
              <img height="50px" alt="CSS" src={Css}></img>
              <img height="50px" alt="Azure" src={Azure}></img>
              <img height="50px" alt="Git" src={Git}></img>
              <img height="50px" alt="Tailwind" src={Tailwind}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                onClick={() =>
                  window.alert(
                    "working on it :), till then check code at GitHub."
                  )
                }
                variant="contained"
              >
                Demo
              </Button>
              <Button
                href="https://github.com/Saifgr8/Saif_YT"
                variant="contained"
              >
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectCards">
        <div style={{ display: "flex" }}>
          <img height="350px" src={WDpool}></img>
          <div>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold", padding: "5px" }}
            >
              Wizard Pool
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontStyle: "italic",
                padding: "15px",
              }}
            >
              Wizard Pool is an innovative game that combines the novel gameplay
              of 8-ball Pool, with a twist of magic. In this game, players can
              play as wizards and utilize among a set of RNG spells to bea other
              player, providing a magical twist.
            </Typography>
            <Typography sx={{ padding: "5px" }}>Tech used:</Typography>
            <div style={{ padding: "5px" }}>
              <img height="50px" alt="React" src={Java}></img>
              <img height="50px" alt="React" src={Git}></img>
              <img height="50px" alt="React" src={Proc}></img>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                onClick={() =>
                  window.alert(
                    "Opps, something's broke. Hang tight I am working on it."
                  )
                }
              >
                Demo
              </Button>
              <Button
                href="https://github.com/UoB-COMSM0110/2023-group-6"
                variant="contained"
              >
                Github
              </Button>
            </div>
            <div style={{ display: "flex" }}>
              <img height="40px" src={YT}></img>
              <Typography sx={{ paddingTop: "10px" }}>
                Watch the Youtube video here:
                <Button
                  href="https://www.youtube.com/watch?v=MSVUIefDKOQ"
                  variant="outlined"
                  sx={{ height: "20px" }}
                >
                  Link
                </Button>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
