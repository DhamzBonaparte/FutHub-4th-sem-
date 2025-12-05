const express = require('express');
const router = express.Router();
const authorize = require("../Middleware/authMiddleware")
const {getCredentials,setCredentials,playerData} = require('../Controllers/credentials');

router.route("/login").post(getCredentials);
router.route('/signup').post(setCredentials);
router.route('/player').get(authorize,playerData);

module.exports = router;