import React, { useState } from 'react';

function CreateUser(props) {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  //function to send info to the database

  const sendInfo = (e) => {
    const requestBody = { username, password, name };
    console.log(requestBody);

    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // mode: 'no-cors',
      body: JSON.stringify(requestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        // on successful create info
        console.log(data);
        props.setUserInfo(data.username); // save username to state
        props.setCodes(data.parksVisited); // save parkvisited to state
        props.setShowWebsite(true);
        props.setCreateAccount(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function to toggle the close button

  const closeBtn = () => {
    props.setWelcome(true);
    props.setCreateAccount(false);
  };

  return (
    <div className="login-modal">
      <h4>Create your account:</h4>
      <div className="input-container">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          className="login-input"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
      </div>
      <div className="input-container">
        <label>Username</label>
        <input
          type="text"
          name="username"
          required
          className="login-input"
          id="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="text"
          name="password"
          required
          className="login-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="button-container">
        <button
          className="submit-button"
          onClick={(e) => {
            sendInfo(e);
          }}
        >
          submit
        </button>
        {/* <button
          onClick={(e) => {
            sendInfo(e);
          }}
        >
          hello
        </button> */}
      </div>
      <div className="close-container">
        <a
          href="#"
          onClick={(e) => {
            closeBtn();
          }}
        >
          Close
        </a>
      </div>
    </div>
  );
}

export default CreateUser;
