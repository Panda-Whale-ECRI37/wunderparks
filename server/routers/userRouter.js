const express = require('express');
const userController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.get(
  '/:parkCode',
  userController.getUser,
  userController.getParkInfo,
  (_req, res) => {
    return res.status(200).json(res.locals.parkInfo);
  }
);

userRouter.post(
  '/login',
  userController.verifyUser,
  userController.getParks,
  (_req, res) => {
    return res.status(200).json({user: res.locals.user, parks: res.locals.parks});
  }
);

userRouter.post('/:parkCode', userController.addPark, (_req, res) => {
  return res.status(200).json(res.locals.parks);
});

userRouter.post(
  '/',
  userController.getUser,
  userController.createUser,
  (_req, res) => {
    return res.status(200).json(res.locals.newUser);
  }
);

module.exports = userRouter;
