import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
    <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ul style={{ display: "flex", listStyle: "none" }}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button sx={{ margin: "0 1.25rem" }} variant="outlined">
              <li>About</li>
            </Button>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <Button sx={{ margin: "0 1.25rem" }} variant="outlined">
              <li>Projects</li>
            </Button>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <Button sx={{ margin: "0 1.25rem" }} variant="outlined">
              <li>Skills</li>
            </Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button sx={{ margin: "0 1.25rem" }} variant="outlined">
              <li>Contact</li>
            </Button>
          </Link>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          ©2023 Mohammad Saifuddin. All Rights Reserved.
        </Typography>
      </div>{" "}
    </>
  );
}

export default Footer;
