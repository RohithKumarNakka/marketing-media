import React, { useEffect, useState } from "react";
import Pic from "../images/rohith.jpg";
import aboutPic from "../images/StewpidsCafe.png";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "apllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
      history.push("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  });

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={userData.name === "Rohith Kumar Nakka" ? Pic : aboutPic}
                  alt="pp"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <br />
                <br />
                <br />
                <br />
                <h2 className="form-title ">Account Details</h2>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left side url  */}
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
                <a
                  href="https://www.instagram.com/paper_and_poster/"
                  target="PP"
                >
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
                      <p>Name</p>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Email</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Phone</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Profession</p>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
