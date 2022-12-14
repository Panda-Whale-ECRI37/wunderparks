import React, { useState, useEffect } from 'react';

function LogIn(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onsubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      return alert('Please fill out all the fields.');
    }
    console.log('we are in the submit');

    const requestBody = { username, password };
    console.log('reqBody', requestBody);
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data', data);
        props.setUserInfo(data.username);
        // save username to state
        props.setCodes(data.parks);
        // save parkvisited to state
        props.setShowWebsite(true);
        props.setLogIn(false);
      })
      .catch((err) => {
        // return alert('username or password incorrect. Please try again.');
        console.log(err);
      });
  };

  const closeButton = () => {
    props.setWelcome(true);
    props.setLogIn(false);
  };

  return (
    <div className="login-modal">
      <h4>Log in:</h4>
      <div className="input-container">
        <label>Username</label>
        <input
          type="text"
          name="username"
          required
          className="login-input"
          onChange={(e) => {
            setUserName(e.target.value);
            console.log('username', username);
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button
          className="submit-button"
          onClick={(e) => {
            onsubmit(e);
          }}
        >
          submit
        </button>
      </div>
      <div className="close-container">
        <a
          href="#"
          onClick={(e) => {
            closeButton();
          }}
        >
          Close
        </a>
      </div>
    </div>
  );
}

export default LogIn;
