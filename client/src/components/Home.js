import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserName(data.name);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h2>
            {userName ? userName : "We are a Social Media Marketing Company"}
          </h2>
          <p className="pt-2">
            {userName
              ? "Happy to see you back!"
              : "We will take your product to next level"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
