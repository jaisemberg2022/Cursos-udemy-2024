import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

export default HomePage;
