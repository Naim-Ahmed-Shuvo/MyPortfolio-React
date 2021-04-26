import React from "react";
import { Grid,Button, Avatar,IconButton } from "@material-ui/core";
import {  TextField } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import '../css/Contact.css';

// 
const Contact = () => {
    const matches = useMediaQuery('(max-width:360px)');

    // 
  return (
    <div className="contact">
        <Grid container>
            <Grid item xs={12} container justify="center" items="center">
                <div className="contact_header">
                    <h4>Contact</h4>
                </div>
            </Grid>
        </Grid>
      <Grid container>
        <Grid item lg={6} md={6} sm={6} container justify="center">
            
            <div className="contact_left">
               <div className="contact_profile">
                   <Avatar src="https://scontent.fdac110-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.17.50.50a/p50x50/132541945_1165132847237063_2483742156278713189_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=t-FptFFnnZwAX8H54FQ&_nc_ht=scontent.fdac110-1.fna&tp=27&oh=c8f0adbcaa554e6799d412c98eebc9d7&oe=60ADC3C6"/>
               </div>
               <div className="contact_card_mid">
                   <div className="contact_card_mid_content">
                        <CallIcon/>
                        <p>+880 1908734685</p>
                   </div>
                   <div className="contact_card_mid_content">
                        <EmailIcon/>
                        <p>shuvonaim123@gmail.com</p>
                   </div>
               </div>
               <div className="contact_card_footer">
                   <h4>Add Me On...</h4>
                   <div className="contact_links">
                        <IconButton><FacebookIcon/></IconButton>
                        <IconButton><LinkedInIcon/></IconButton>
                        <IconButton><GitHubIcon/></IconButton>
                   </div>
               </div>
            </div>
           
           
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}  >
            <div className={`${matches && 'max_360px'} contact_form`} >
               <TextField variant="outlined" label="Name.." className="input1"/>
               <TextField variant="outlined" label="Email.." className="input1"/>
               <TextField variant="outlined"  className="input1" multiline rows={5} placeholder="Your Message..." label="Message..."/>
               <Button className="contact_btn">Send</Button>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
