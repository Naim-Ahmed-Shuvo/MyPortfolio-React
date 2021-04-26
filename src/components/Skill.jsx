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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv83JfskU5nNXyRhCQovBwOHKUwmFkhBli4A&usqp=CAU"
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
                image="https://pics.freeicons.io/uploads/icons/png/10814242311582545600-512.png"
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
                image="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"
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
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
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
              image="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
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
              image="data:image/png;base64,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"
              className="skills_card_media"
            />
            <CardContent className="skills_card_content">
              <Typography className="skills_card_content_title" align="center" >
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
