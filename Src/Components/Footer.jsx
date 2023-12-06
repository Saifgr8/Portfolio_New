import { Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <ul style={{ display: 'flex', listStyle: "none" }}>
        <Link to="about" spy={true} smooth={true} duration={500}><Button sx={{ margin: '0 1.25rem' }} variant='outlined'><li>About</li></Button></Link>
        <Link to="projects" spy={true} smooth={true} duration={500}><Button sx={{ margin: '0 1.25rem' }} variant='outlined'><li>Projects</li></Button></Link>
        <Link to="skills" spy={true} smooth={true} duration={500}><Button sx={{ margin: '0 1.25rem' }} variant='outlined'><li>Skills</li></Button></Link>
        <Link to="contact" spy={true} smooth={true} duration={500}><Button sx={{ margin: '0 1.25rem' }} variant='outlined'><li>Contact</li></Button></Link>
      </ul>
    </div>
  );
}

export default Footer;
