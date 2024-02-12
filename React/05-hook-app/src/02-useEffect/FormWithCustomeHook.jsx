import React from "react";
import { useState ,useEffect} from "react";
import { useForm } from "../hooks/useForm";

const FormWithCustomeHook = () => {
 
  const {formState,onInputChnge,userName,userEmail,userPassword,onDeletForm} = useForm({
    userName: "",
    userEmail: "",
    userPassword: "",
  })
  
  // const {userName,userEmail,userPassword} = formState;
  
  // useEffect(() => {
  //   // console.log("formState called");
  // }, [formState]);

  // useEffect(() => {
  //   // console.log("userEmail called");
  // }, [userEmail]);

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
         <br />
        <input
          type="password"
          placeholder="contraseña"
          name="userPassword"
          value={userPassword}
          onChange={onInputChnge}
        />
        <button onClick={onDeletForm}>Borrar</button>
    </>
  );
};

export default FormWithCustomeHook;
