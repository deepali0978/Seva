import React from 'react';
import { Fade ,Flip,Zoom} from 'react-reveal';

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="headerContainer">
        <h1>About Us</h1>
      </div>
      <div className="contentContainer">
        <div className="imageContainer">
          <Flip>
          <img
            src="https://www.feedingamerica.org/sites/default/files/styles/max_650x650/public/2020-04/HawaiiFoodbank_HawaiiFarmBureau_041420_13-WEB.jpg?itok=JV4DJK5C"
            alt="Food Donation"
          />
          </Flip>
        </div>
          <Zoom>
        <div className="textContainer">
          <Fade>
            <p>
              Welcome to our food donation website! We are a team of passionate individuals who are committed to reducing
              food waste and fighting hunger in our community. Our mission is simple - to connect businesses and
              individuals with surplus food to those who need it the most.
            </p>
          </Fade>
          <Fade>
            <p>
              Our team is comprised of individuals from diverse backgrounds who share a common goal of making a positive
              impact in our community. We believe that food is a basic human right, and we work tirelessly to ensure that
              everyone has access to nutritious meals.
            </p>
          </Fade>
          <Fade>
            <p>
              We work closely with local organizations, food banks, and shelters to ensure that all food donations are
              distributed to those who need it the most. We understand the importance of making sure that all donations
              are handled safely and efficiently, and we take pride in our ability to do so.
            </p>
          </Fade>
          {/* Add more animated <p> tags here */}
        </div>
        </Zoom>
      </div>
      <style jsx>{`
        .AboutUs {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          text-align: center;
        }

        .headerContainer {
          margin-bottom: 30px;
        }

        .headerContainer h1 {
          font-size: 32px;
          color: #333;
          margin: 0;
        }

        .contentContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .imageContainer {
          margin-bottom: 20px;
        }

        .imageContainer img {
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 100%;
          height: auto;
        }

        .textContainer {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .textContainer p {
          margin-bottom: 20px;
          font-size: 16px;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
