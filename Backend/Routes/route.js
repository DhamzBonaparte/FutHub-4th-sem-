const express = require("express");
const router = express.Router();
const authorize = require("../Middleware/authMiddleware");
const {
  getCredentials,
  setCredentials,
  playerData,
  setOpponent,
  getOpponents,
  searchOpponents,
  myOpponentPostings,
  delMyOpponents,
  updateMyOpponents,
  setTeammate,
  getTeammate
} = require("../Controllers/credentials");

router.route("/login").post(getCredentials);
router.route("/signup").post(setCredentials);
router.route("/player").get(authorize, playerData);
router
  .route("/player/find-opponent")
  .post(authorize, setOpponent)
  .get(getOpponents);

router.route("/player/search-opponent").post(searchOpponents);
router.route("/player/my-opponent-postings").get(authorize, myOpponentPostings);
router
  .route("/player/my-opponent-postings/:id")
  .delete(authorize, delMyOpponents)
  .patch(authorize, updateMyOpponents);

router.route("/player/find-teammate").post(authorize,setTeammate).get(getTeammate);

module.exports = router;
