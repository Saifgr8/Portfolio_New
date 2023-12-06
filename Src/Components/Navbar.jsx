import { Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <div className='NavbarTopDiv'>
      <Typography variant="h4" sx={{ marginBottom: '0.5rem', fontFamily: 'cursive' }}>
        Mohammad Saifuddin
      </Typography>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <Button sx={{ margin: '0.5rem' }} variant='outlined'>
            <li>About</li>
          </Button>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <Button sx={{ margin: '0.5rem' }} variant='outlined'>
            <li>Projects</li>
          </Button>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <Button sx={{ margin: '0.5rem' }} variant='outlined'>
            <li>Skills</li>
          </Button>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button sx={{ margin: '0.5rem' }} variant='outlined'>
            <li>Contact</li>
          </Button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
