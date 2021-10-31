import React from "react";
import PPPro from "../images/PPLogo.png";

const AboutUs = () => {
  return (
    <>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={PPPro} alt="PP" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="profile-head align-items-center">
              <h2 className="form-title ">About Us</h2>
              <p>
                We are a social media marketing company. We will market your
                product on all digital platforms like Facebook, Instagram,
                Twitter and Youtube. We will also post articles in our website
                on your product specifications and details.
              </p>

              <p>
                Our digital partners are the top creators in social media. They
                create memes, videos about your product in a conceptual way. You
                can check our pages in social media regarding our content and
                give us your product to take it to next level.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Our Media</p>
              <a href="https://www.paperandposter.com/" target="PP">
                Website
              </a>
              <br />
              <a href="https://m.facebook.com/stewpidscafe/" target="PP">
                Facebook
              </a>
              <br />
              <a href="https://www.instagram.com/stewpidscafe/" target="PP">
                Stewpids Cafe Instagram
              </a>
              <br />
              <a href="https://www.instagram.com/paper_and_poster/" target="PP">
                Paper and Poster Instagram
              </a>
              <br />
              <a href="https://www.youtube.com/c/StewpidsCafe" target="PP">
                Youtube
              </a>
              <br />
              <a href="https://twitter.com/StewpidsCafe?s=09" target="PP">
                Twitter
              </a>
              <br />
            </div>
          </div>
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>Name of our Company</p>
                  </div>
                  <div className="col-md-6 ">
                    <p>Paper and Poster</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>Email</p>
                  </div>
                  <div className="col-md-6">
                    <p>contact@paperandposter.com</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>Phone</p>
                  </div>
                  <div className="col-md-6">
                    <p>888888888</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>What we are capable of?</p>
                  </div>
                  <div className="col-md-6">
                    <p>We will market anything you do on your own.</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>Our marketing partners</p>
                  </div>
                  <div className="col-md-6">
                    <p>Inco Telugu, MTJ, 360d, Prof Killers, NBUR</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <p>Total Projects</p>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
