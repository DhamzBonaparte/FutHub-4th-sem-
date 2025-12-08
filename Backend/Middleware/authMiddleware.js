const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorize = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ msg: "Not authorized to enter!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.status(403).send({ msg: "Invalid or Expired token" });
  }
};

module.exports = authorize;
