import React from "react";
import { useState ,useEffect} from "react";
import Message from "./Message"

const SimpleForm = () => {
  const [formState, setform] = useState({
    userName: "strider",
    userEmail: "SomeGuy@gmail.com",
  });

  const { userName, userEmail } = formState;

  const onInputChnge = ({ target }) => {
    const { name, value } = target;
    setform({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("formState called");
  }, [formState]);

  useEffect(() => {
    // console.log("userEmail called");
  }, [userEmail]);

  return (
    <>
      <h1>formulario</h1>
      <hr />
        <input
          type="text"
          placeholder="user name"
          name="userName"
          value={userName}
          onChange={onInputChnge}
          autoComplete="off"
        />
        <br />
        <input
          type="email"
          placeholder="email"
          name="userEmail"
          value={userEmail}
          onChange={onInputChnge}
          autoComplete="off"

        />
        {
          (userName == "strider2") && <Message/>

        }
    </>
  );
};

export default SimpleForm;
