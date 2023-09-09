import React, { useReducer, useState } from "react";

const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const Form1 = ({ dispatch }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <>
      <input
        type="email"
        onChange={(ev) => {
          dispatch({
            type: "email_change",
            email: ev.target.value,
          });
        }}
      ></input>
      <button
        onClick={async () => {
          setShowSpinner(true);
          await mockApi();
          dispatch({
            type: "show_password_form",
            showForm2: true,
          });
          setShowSpinner(false);
        }}
      >
        Next
      </button>
      {showSpinner ? <span>...loading...</span> : null}
    </>
  );
};

const Form2 = ({ dispatch }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <>
      <label>Password:</label>
      <input
        type="text"
        onChange={(ev) => {
          dispatch({
            type: "password_change",
          });
        }}
      />
      <button
        onClick={async () => {
          setShowSpinner(true);
          await mockApi();
          dispatch({
            type: "show_success",
            showSucess: true,
          });
          setShowSpinner(false);
        }}
      >
        Submit{" "}
      </button>
      {showSpinner ? <span>...loading...</span> : null}
    </>
  );
};

const initState = {
  email: "",
  password: "",
  showForm2: false,
  showForm1: true,
  showSucess: false,
};

function loginReducer(state, actions) {
  switch (actions.type) {
    case "email_change":
      return {
        ...state,
        email: actions.email,
      };
    case "password_change":
      return {
        ...state,
        password: actions.password,
      };
    case "show_password_form":
      return {
        ...state,
        showForm2: true,
        showForm1: false,
      };
    case "show_success":
      return {
        ...state,
        showSucess: true,
      };
    default:
      throw Error("unknow action");
  }
}

const TwoStepLogin = () => {
  const [state, dispatch] = useReducer(loginReducer, initState);
  return (
    <div>
      Two step Login form
      {state.showForm1 ? <Form1 dispatch={dispatch} /> : null}
      {state.showForm2 ? <Form2 dispatch={dispatch} /> : null}
      {state.showSucess ? <div> login success </div> : null}
    </div>
  );
};

export default TwoStepLogin;
