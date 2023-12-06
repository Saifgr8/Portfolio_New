import React from "react";
import { Typography, Button } from "@mui/material";
import email from "../../assets/email.png";
import Linmail from "../../assets/LinkedContact.png";

function Contact() {
  return (
    <div id="contact" style={{ height: "60vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "100px", margin: "20px" }}>
          <Typography sx={{ marginLeft: "10px" }} variant="body1">
            Get In Touch
          </Typography>
          <Typography variant="h5">Contact Me</Typography>
        </div>
      </div>
      <div className="ContactCards">
        <img src={email} height="100px"></img>
        <div style={{ padding: "20px" }}>
          <Typography sx={{ marginRight: "30px" }}>
            Saifgr7@gmail.com
          </Typography>
          <Typography sx={{ marginLeft: "30px" }}>
            www.linkedin.com/in/sfud
          </Typography>
        </div>
        <img src={Linmail} height="100px"></img>
      </div>
    </div>
  );
}

export default Contact;
