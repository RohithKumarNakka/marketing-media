import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../App";

function Logout() {
  const { dispatch } = useContext(UserContext);
  //promises

  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "apllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/login", { replace: true });
        if (res.status !== 200) {
          throw new Error(res.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <>
      <p>Logged out</p>
    </>
  );
}

export default Logout;
