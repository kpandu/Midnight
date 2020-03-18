import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import SingleExp from "./SingleExp";
import SectionHeader from "./SectionHeader";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
export default class Experience extends Component {
  render() {
    return (
      <Container style={{ minHeight: "120vh" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <SectionHeader title="EXPERIENCE" description="0x2" align="left" />
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={100}
                config={{ duration: 600, easing: x => Math.sqrt(Math.sqrt(x)) }}
                to={{ width: isVisible ? "50%" : "0%" }}
              >
                {({ width }) => (
                  <hr
                    width={width}
                    color="white"
                    style={{ marginLeft: "0px" }}
                  ></hr>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Grid>
        <SingleExp
          loc="Annapolis Juntion, MD"
          date="June 2019 - August 2019"
          title="BOEING I&A"
          description="At BI&A I engineered a facial recognition app applying AWS
            Rekognition to identify people, objects, and frequent associations
            between people. Given an image of someone, you can find all the
            images that person is in, the frequency of people that person is
            with, and the objects within those images. You can also search for
            objects in the datasets and find the matching images along with
            graphs to better visualize the results."
          src="https://www.ftmeadealliance.org/wp-content/uploads/2018/02/Copy-of-Custom-%E2%80%93-Untitled-Design-4.png"
          align="right"
          bullets={[
            "Hosted ReactJS frontend on AWS S3, ExpressJS REST APIs on AWS EC2, and MySQL database in AWS RDS.",
            "Improved reliability with multiple REST APIs in a microservice architecture.",
            "Maximized scalability by deploying through AWS Elastic Beanstalk."
          ]}
          caption="Software Engineer Intern"
        />
        <SingleExp
          title="UMD"
          loc="College Park, MD"
          date="August 2019 - May 2020"
          description="In the class CMSC389N: Single Page Web Application Development,
           I taught ReactJS, ExpressJS, and MongoDB. I held weekly office hours and aided 
           in the creation of projects and exams. "
          src="https://www.cs.umd.edu/sites/default/files/logo_top_bottom.png"
          align="left"
          bullets={[]}
          caption="Teaching Assistant"
        />
        <SingleExp
          title="AMAZON"
          loc="Seattle, WA"
          date="May 2020 - August 2020"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis 
          aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
          align="right"
          bullets={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
            "Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed."
          ]}
          caption="Software Development Engineer Intern"
        />
      </Container>
    );
  }
}
