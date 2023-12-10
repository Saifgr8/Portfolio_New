import React, { useState } from "react";
import "./About.css";
import { Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import React from "../../assets/React.png";
import Figma from "../../assets/Figma.png";
import Js from "../../assets/js-file.png"; //F
import html from "../../assets/html5.png"; //F
import Css from "../../assets/css-3.png"; // F
import Bootstrap from "../../assets/bootstrap.png"; //FEND
import Tailwind from "../../assets/tailwind.png"; //FEND
import SASS from "../../assets/SASS.png";
import Nodejs from "../../assets/nodejs.png";  //b
import Postman from "../../assets/POSTMAN.png"; //B
import Java from "../../assets/java.png"; //B
import Spring from "../../assets/Spring.png"; //B
import MongoDB from "../../assets/MDB.png"; //B
import SQL from "../../assets/sql-server.png"; //m
import Git from "../../assets/GIT.png"; 
import Proc from "../../assets/Proc.png";
import Azure from "../../assets/Azure.png";
import xml from '../../assets/xml.png';
import { FaFaceKissWinkHeart } from "react-icons/fa6";




const Section = ({ title, font, open, handleclose, imge, span }) => {
  console.log(imge);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="SkillcardsNew"
        onClick={() => {
          handleclose();
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{padding:'10px'}} fontFamily={font} variant="h4">
              {title}
            </Typography>
            {open && <Typography fontFamily={font}>{span}</Typography>}
            {open ? (
              <FiMinus style={{ height: "50px", width: "50px"}} /> 
            ) : (
              <FaPlus style={{ height: "40px", width: "40px", padding: '20px'  }} />
            )}
          </div>
        </div>
        <div style={{ padding: "10px", display: 'flex', justifyContent: 'center' }}>
          {open && (
            <div>
              {imge.map(({ id, src }) => (
                <img
                  style={{ padding: "10px" }}
                  key={id}
                  src={src}
                  alt={`Image - ${id}`}
                  height="50px"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function SkillsNew() {
  const [open, setOpen] = useState("");
  const Fimges = [
    { id: "react", src: React },
    { id: "fgma", src: Figma },
    {
      id: "js",
      src: Js,
    },
    {
      id: "HTML",
      src: html,
    },
    { id: "css", src: Css },
    { id: "BS", src: Bootstrap },
    { id: "Tw", src: Tailwind },
    { id: "sas", src: SASS },
  ];
  const Bimgaes = [
    { id: "java", src: Java },
    { id: "spring", src: Spring },
    {
      id: "node",
      src: Nodejs,
    },
    {
      id: "mongo",
      src: MongoDB,
    },
    { id: "postman", src: Postman },
    { id: "sql", src: SQL },
  ];
  const Misc = [
    { id: "azure", src: Azure },
    { id: "git", src: Git },
    {
      id: "proc",
      src: Proc,
    },
    {
      id: "xMl",
      src: xml,
    },
  ];

  return (
    <div>
      <Section
        title="FRONT END"
        font="cursive"
        imge={Fimges}
        span="Coz style is everything hun"
        open={open === "FEND"}
        handleclose={() => {
          setOpen(open == "FEND" ? null : "FEND");
        }}
      />
      <Section
        title="BACK END"
        font="Roboto"
        imge={Bimgaes}
        span="Handling your data like a Pro"
        open={open === "BEND"}
        handleclose={() => {
          setOpen(open == "BEND" ? null : "BEND");
        }}
      />
      <Section
        title="MISCELLANEOUS"
        font="Georgia"
        imge={Misc}
        span="Worth looking at.."
        open={open === "MISC"}
        handleclose={() => {
          setOpen(open == "MISC" ? null : "MISC");
        }}
      />
    </div>
  );
}

export default SkillsNew;
