const express = require('express');
const router = express.Router();
const authorize = require("../Middleware/authMiddleware")
const {getCredentials,setCredentials,playerData,setOpponent,getOpponents} = require('../Controllers/credentials');

router.route("/login").post(getCredentials);
router.route('/signup').post(setCredentials);
router.route('/player').get(authorize,playerData);
router.route('/player/find-opponent').post(setOpponent).get(getOpponents);

module.exports = router;