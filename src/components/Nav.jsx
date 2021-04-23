import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "../css/Nav.css";
import Typical from "react-typical";

//
const Nav = () => {
  return (
    // <div className="navbar">
    //     <div className="nav_logo">
    //         <span>Naim Ahmed Shuvo</span>
    //     </div>
    //     <div className="nav_links">
    //         <ul>
    //             <li>
    //                 <a href="/">Home</a>
    //             </li>
    //             <li>
    //                 <a href="#skill">Skill</a>
    //             </li>
    //             <li>
    //                 <a href="#Education">Education</a>
    //             </li>
    //             <li>
    //                 <a href="#Contact">Contact</a>
    //             </li>

    //         </ul>
    //     </div>
    //     <div className="nav_extra">
    //         <Button >Download CV 📰</Button>
    //     </div>
    // </div>
    <div className="navbar">
      <Grid container>
        <Grid item lg={3} md={3} container items="center" justify="center">
          <div className="nav_logo">
            <Typography>
              Naim Ahmed{" "}
              <span>
                Shuvo
               
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6} md={6} container items="center" justify="center">
          <div className="nav_links">
            <ul>
              <li>About</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </Grid>
        <Grid item lg={3} md={3} container justify="center">
          <Button className="nav_btn">Download CV</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
