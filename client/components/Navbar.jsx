import React from 'react';

const Navbar = (props) => {
  const changeRender = (component) => {
    if (component === 'logout') {
      props.setWelcome(true);
      props.setShowWebsite(false);
    } else if (component === 'trips') {
      console.log(`need to write this`);
    }
  };

  return (
    <div className="navbar-wrapper">
      <div>
        <h1 className="title"> WÜNDER PARKS</h1>
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <a href="#"> Log Trip</a>
          </li>
          <li>
            <a href="#">Plan Trip</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                changeRender('logout');
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
