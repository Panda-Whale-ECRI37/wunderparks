import React from 'react';

const Navbar = (props) => {
  const changeRender = (component) => {
    if (component === 'logout') {
      props.setWelcome(true);
      props.setShowWebsite(false);
    } else if (component === 'logTrip') {
      props.setPlan(false);
      props.setLogTrip(true);
    } else if (component === 'planTrip') {
      props.setLogTrip(false);
      props.setPlan(true);
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
            <a
              href="#"
              onClick={(e) => {
                changeRender('logTrip');
              }}
            >
              Log Trip
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                changeRender('planTrip');
              }}
            >
              Plan Trip
            </a>
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
