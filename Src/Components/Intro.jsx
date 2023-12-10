import React, { useState } from "react";
import SaifImgIntro from "../../assets/MSAIF.jpg";
import { Button, Typography, Dialog, DialogContent } from "@mui/material";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import CVf from "../../assets/CVSF.png";
import CVb from '../../assets/CVSB.png'

function Intro() {
  const [showCV, SetShowCV] = useState(false);
  const handleOpen = () => {
    SetShowCV(true);
  };
  const handleClose = () => {
    SetShowCV(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        style={{ borderRadius: "40%", height: "31.25rem", marginRight: "2rem" }}
        src={SaifImgIntro}
        alt="SaifGoodLookingImg"
      />
      <div>
        <Typography variant="body2">Hello I'm</Typography>
        <Typography  sx={{fontFamily: 'cursive'}} variant="h5">Mohammad Saifuddin</Typography>
        <Typography variant="h6" >A web developer</Typography>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Button
            onClick={handleOpen}
            variant="contained"
            style={{ marginRight: "1rem" }}
          >
            Show CV
          </Button>

          <Button href="mailto:saifgr7@gmail.com"
          variant="contained">Contact Me</Button>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <a href="https://www.linkedin.com/in/sfud/">
            <img
              height="50px"
              src={Linkedin}
              style={{ marginRight: "0.5rem" }}
            />
          </a>
          <a href="https://github.com/Saifgr8">
            <img height="50px" src={Github} />
          </a>
        </div>
      </div>
      <Dialog open={showCV} onClose={handleClose}>
        <DialogContent>
          <img 
            src={CVf}
            alt="CV"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
          />
          <img 
            src={CVb}
            alt="CV"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Intro;
