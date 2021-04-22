import React from "react";
import "../css/Header.css";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide'
const Header = () => {
  
  return (
    <div className="header">

    
    <Grid container spacing={2} justify="center" alignItems="center" style={{
      marginTop: 30,
      
    }}>
     
      <Grid item lg={12} container justify="center" alignItems="center">
        <div
         className="headerInfoContainer"
        >
           
            <h3 className="headerInfoContainer_h3">I am Naim Ahmmed Shuvo</h3>
            <h4 className="headerInfoContainer_h4">Full Stack Developer (Freshers)</h4>
            <p className="headerInfoContainer_p">
              Currently Learning MEARN Stack.Also learned PHP(Laravel)
            </p>
          
          <Slide bottom>
          <div className="header_info_icons">
              <h4 className="icons_titile">Find Me 👇</h4>
              <div className="icons">
                 <a>
                 <FacebookIcon className="haderIcons"/>
                 </a>
                  
                  <a><GitHubIcon className="haderIcons"/></a>
                  <a><LinkedInIcon className="haderIcons"/></a>
              </div>
          </div>
        </Slide>
         
        </div>
      </Grid>
    </Grid>
    </div>
  );
};

export default Header;
