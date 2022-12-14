const express = require('express');
const userController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.get( //body: {username}
  '/:parkCode',
  userController.getUser,
  userController.getParkInfo,
  (_req, res) => {
    return res.status(200).send(res.locals.tripsInfo); //res.locals.parkInfo
  }
);

userRouter.post( //body: {username, password}
  '/login',
  userController.verifyUser,
  userController.getParks,
  (_req, res) => {
    return res.status(200).json({user: res.locals.user, parks: res.locals.parks});
  }
);

userRouter.post( //body: {username, date, notes, activitiesDone}
  '/:parkCode',
  userController.addPark, userController.addTrip, (_req, res) => {
  return res.status(200).json({ parks: res.locals.parks, trips: res.locals.trips });
});

userRouter.post( //body: {name, username, password}
  '/',
  userController.getUser,
  userController.createUser,
  (_req, res) => {
    return res.status(200).json(res.locals.newUser);
  }
);

module.exports = userRouter;
