import React from "react";
import "../css/Skills.css";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Slide from "react-reveal/Slide";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";
import CodeIcon from "@material-ui/icons/Code";
import Rotate from 'react-reveal/Rotate';

//
const Skill = () => {
  return (
    <div className="skills">
      <div className="skill__heading">
        <h4>
          Skills <span></span>
        </h4>
      </div>
      <Grid
        container
        spacing={3}
        style={{
          padding: "30px 50px",
        }}
      >
        {/* item 1 */}
      
          <Grid item xs={12} md={6} lg={4}>
          <Slide left >
            <Card className="skills__card">
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="skills_card_media"
              />
              <CardContent className="skills_card_content">
                <Typography className="skills_card_content_title">
                  HTML
                  <a
                    href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeIcon className="title_icon" />
                  </a>
                </Typography>
                <Typography className="skills_card_content_des">
                  Experience for 1 year
                </Typography>
                <div className="skills_card_rating">
                  <h4>Expertise Level 💪</h4>
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                </div>
              </CardContent>
            </Card>
            </Slide>
          </Grid>

          {/* item 2 */}
          <Grid item xs={12} md={6} lg={4}>
            <Slide top>
            <Card className="skills__card">
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3NzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="skills_card_media"
              />
              <CardContent className="skills_card_content">
                <Typography className="skills_card_content_title">
                  Css
                  <a
                    href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeIcon className="title_icon" />
                  </a>
                </Typography>
                <Typography className="skills_card_content_des">
                  Experience for 1 year
                </Typography>
                <div className="skills_card_rating">
                  <h4>Expertise Level 💪</h4>
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                </div>
              </CardContent>
            </Card>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Slide right>
            <Card className="skills__card">
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="skills_card_media"
              />
              <CardContent className="skills_card_content">
                <Typography className="skills_card_content_title">
                  JavaScript
                  <a
                    href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeIcon className="title_icon" />
                  </a>
                </Typography>
                <Typography className="skills_card_content_des">
                  Experience for more than 8 months
                </Typography>
                <div className="skills_card_rating">
                  <h4>Expertise Level 💪</h4>
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                  <StarIcon className="card_rating" />
                </div>
              </CardContent>
            </Card>
            </Slide>
          </Grid>
      

        <Grid item xs={12} md={6} lg={4}>
          <Rotate top left>
          <Card className="skills__card">
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="skills_card_media"
            />
            <CardContent className="skills_card_content">
              <Typography className="skills_card_content_title">
                React Js
                <a
                  href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="title_icon" />
                </a>
              </Typography>
              <Typography className="skills_card_content_des">
                Experience for 4 months
              </Typography>
              <div className="skills_card_rating">
                <h4>Expertise Level 💪</h4>
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
              </div>
            </CardContent>
          </Card>
          </Rotate>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Rotate bottom right>
          <Card className="skills__card">
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="skills_card_media"
            />
            <CardContent className="skills_card_content">
              <Typography className="skills_card_content_title">
                Node Js
                <a
                  href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="title_icon" />
                </a>
              </Typography>
              <Typography className="skills_card_content_des">
                Experience for 4 months
              </Typography>
              <div className="skills_card_rating">
                <h4>Expertise Level 💪</h4>
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
              </div>
            </CardContent>
          </Card>
          </Rotate>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Rotate top right>
          <Card className="skills__card">
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="skills_card_media"
            />
            <CardContent className="skills_card_content">
              <Typography className="skills_card_content_title">
                Laravel
                <a
                  href="https://github.com/Naim-Ahmed-Shuvo?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="title_icon" />
                </a>
              </Typography>
              <Typography className="skills_card_content_des">
                Learned probably 8 months ago 😄
              </Typography>
              <div className="skills_card_rating">
                <h4>Expertise Level 💪</h4>
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
                <StarIcon className="card_rating" />
              </div>
            </CardContent>
          </Card>
          </Rotate>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skill;
