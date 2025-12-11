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
  logout,
  getTeammate,
  searchTeammates,
  checkTeammate,
  getMyTeammatePosting,
  deleteMyPosting
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

router.route("/player/logout").post(logout);

router
  .route("/player/find-teammate")
  .post(authorize, setTeammate)
  .get(authorize, getTeammate);

router.route("/player/search-teammate").post(searchTeammates);
router.route("/player/check-teammate").get(authorize, checkTeammate);

router.route("/player/my-teammate-listing").get(authorize,getMyTeammatePosting);
router.route('/player/my-teammate-listing/:id').delete(authorize,deleteMyPosting)
module.exports = router;
