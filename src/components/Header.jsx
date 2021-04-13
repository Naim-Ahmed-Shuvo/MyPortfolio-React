import React from 'react';
import '../css/Header.css';
import { Grid } from '@material-ui/core';
const Header = () => {
    return (
        
        <Grid container spacing={2}>
            <Grid item >
            <img src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            </Grid>
            <Grid item>
               <div style={{
                   marginLeft: 30
               }}>
               <h3>Lorem ipsum dolor sit amet.</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, doloribus!</p>
               </div>
            </Grid>
        </Grid>
    );
};

export default Header;