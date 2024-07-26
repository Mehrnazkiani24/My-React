import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! My name is MEHRNAZ KIANI located in Los Angeles, CA. I enjoy working out, traveling, trying new food and learning about computer science. 
          </p>
          <p>I am looking to learn a new skill hence why I started this full stack coding bootcamp course.  I am interested in mastering coding and web development and changing my career Into this fast growing field.  I am currently in a financial industry. </p>
          <p>I enjoy spending time with family and learning new things. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
