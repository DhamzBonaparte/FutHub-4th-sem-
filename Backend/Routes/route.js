const express = require('express');
const router = express.Router();
const {getCredentials,setCredentials} = require('../Controllers/credentials');

router.route("/login").post(getCredentials);
router.route('/signup').post(setCredentials);

module.exports = router;