const mongoose = require("mongoose");
const User = require("../models/userModel.js");

const bcrypt = require("bcryptjs");

const userController = {};

// Create a new user in the database
userController.createUser = async (req, res, next) => {
  console.log("reqbody", req.body);
  console.log(res.locals);
  try {
    if (res.locals.user) {
      // if res.locals.user is defined, then user w/ username exists already
      return next({
        log: "userController.createUser",
        status: 400,
        message: { err: "Username Taken" },
      });
    }
    console.log("create user", req.body);
    const salt = await bcrypt.genSalt(10);
    const { name, username, password } = req.body;
    const hashPW = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      username,
      password: hashPW,
      parksVisited: [],
      trips: [],
    });
    res.locals.newUser = user; // <-- send back all user info
    return next();
  } catch (err) {
    return next(err);
  }
};

// Get user info
userController.getUser = (req, res, next) => {
  // User.findOne({ name: "Aalok" })
  const checkUsername = req.body.username;
  User.findOne({ username: checkUsername })
    .then((user) => {
      if (user) {
        //will be null if cannot find user w/ username
        res.locals.user = user; // persist user info if found
      }
      return next();
    })
    .catch((err) => {
      console.log("User not found");
      return next({ message: "Error in getUser" });
    });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: "aalok1" }) //CHANGED TO AALOK FROM USERNAME
    .then((user) => {
      if (!user) {
        return next({
          log: "userController.verifyUser",
          status: 400,
          message: { err: "Wrong username or password" },
        });
      } else {
        const hashPW = user.password;
        bcrypt.compare(password, hashPW, (err, passMatch) => {
          //check password w/ bcrypt
          if (passMatch) {
            res.locals.user = user; //persist user info through rest of middleware
            return next(); // returns true if password matches hashPW
          } else {
            return next({
              log: "userController.verifyUser",
              status: 400,
              message: { err: "Wrong username or password" },
            });
          }
        });
      }
    })
    .catch((err) => {
      return next({ message: "Error in verifyUser" });
    });
};

// Add a park to a user's visited parks array
userController.addPark = async (req, res, next) => {
  try {
    const parkCode = req.params.parkCode;
    const user = await User.findOne({ username: req.body.username })
    // const user = await User.findOne({ name: 'Aalok' });
    if (user) {
      // const usersParksVisited = Object.keys(user.parksVisited);
      if(!user.parksVisited.includes(parkCode)) {//add park if has not visited
        user.parksVisited = [ ...user.parksVisited, parkCode ];
        const newUser = await user.save();
      }  
    }
    res.locals.parks = user.parksVisited; // <-- send back updated list of all parks & trips XXthe newly added park's info
    return next();
  } catch (err) {
    const error = {
      log: 'userController.addPark',
      status: 500,
      message: { err: 'User not found' },
    };
    return next(error);
  }
};

//Add trip to array of trip objects
userController.addTrip = async (req, res, next) => {
  try {
    const parkCode = req.params.parkCode;
    const newTrip = { // create new trip
      parkCode: parkCode,
      date: req.body.date,
      notes: req.body.notes,
      activitiesCompleted: req.body.activitiesDone,
    };
    const user = await User.findOne({ username: req.body.username });
    // const user = await User.findOne({ name: 'Aalok' });
    if (user) {
      const usersParksVisited = Object.keys(user.parksVisited);
      if(usersParksVisited.includes(parkCode)) {//if user has already visited this park
        user.parksVisited = user.parksVisited.parkCode.concat(newTrip) // { ...user.parksVisited, [parkCode]: newPark };
        const newUser = await user.save();
        console.log(newUser);
      }
      else { //if first time visiting this park
        user.parksVisited.parkCode = [newTrip]; // set key as parkCode and value as array w/ first trip
      }
    }
    res.locals.trips = user.trips; // <-- send back updated list of all parks & trips XXthe newly added park's info
    return next();
  } catch (err) {
    return next(err);
  }
};

// Get parks completed array for icon coloring on landing page
userController.getParks = (req, res, next) => {
  User.findOne({ name: "Aalok" })
    // const myUsername = res.locals.user.username;
    // User.findOne({ username: myUsername })
    .then((user) => {
      res.locals.parks = user.parksVisited; // <-- send back array of parks completed
      return next();
    })
    .catch((err) => {
      return next({ message: "Error in getParks" });
    });
};

// Get user's park-specific info for top of modal display
userController.getParkInfo = (req, res, next) => {
  try {
    const { parkCode } = req.params;

    const userTrips = res.locals.user.trips;
    let parkTrips = [];
    for(let i = 0; i < userTrips.length; i++) {
      if(userTrips[i].parkCode === parkCode) {
        parkTrips.push(userTrips[i]);
      }
    }
    res.locals.tripsInfo = parkTrips; //send info about specific parkCode
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
