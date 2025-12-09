const login = require("../Model/login");
const signup = require("../Model/signup");
const bcrypt = require("bcrypt");
const mail = require("nodemailer");
const oppponent = require("../Model/opponent");
const jwt = require("jsonwebtoken");
const opponent = require("../Model/opponent");
require("dotenv").config();

// for login
const getCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const approved = await signup.findOne({ email });

    if (!approved) {
      return res.status(404).json({
        msg: "Account not found",
        status: "Terminated",
      });
    }

    const correctPassword = await bcrypt.compare(password, approved.password);

    if (!correctPassword) {
      return res.status(401).json({
        msg: "Invalid email or password",
        status: "Terminated",
      });
    }

    const token = jwt.sign(
      {
        id: approved._id,
        email: approved.email,
        firstName: approved.firstName,
        lastName: approved.lastName,
        role: approved.roles,
      },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({
      msg: "Login successful",
      data: {
        id: approved._id,
        email: approved.email,
        firstName: approved.firstName,
        lastName: approved.lastName,
        role: approved.roles,
      },
      status: "completed",
      token: token,
    });
    console.log(correctPassword);
  } catch (err) {
    res.status(401).json({
      msg: "Username or Password is incorrect.",
      error: err.message,
      status: "Terminated",
    });
  }
};

//for signup
const setCredentials = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    agreedToTerms,
    roles,
    location,
    phone,
  } = req.body;

  const newPassword = await bcrypt.hash(password, 13);

  try {
    const insert = await signup.create({
      firstName,
      lastName,
      email,
      password: newPassword,
      roles,
      agreedToTerms,
      location,
      phone,
    });
    res.status(201).json({
      msg: "User created successfully",
      user: insert,
      status: "Completed",
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
      status: "Not Completed",
    });
  }
};

//users data after login
const playerData = (req, res) => {
  res.status(200).json({ msg: req.user });
};

//posting as opponent
const setOpponent = async (req, res) => {
  try {
    const { id } = req.user;

    const {
      teamName,
      totalPlayers,
      location,
      averageAge,
      contact,
      venue,
      gender,
      date,
      playerNames,
      level,
      timeFrom,
      timeTo,
    } = req.body;

    const getData = await opponent.create({
      userId: id,
      teamName,
      totalPlayers,
      location,
      averageAge,
      contact,
      venue,
      gender,
      matchDate: new Date(date),
      players: playerNames.map((n) => ({ name: n })),
      level,
      timeFrom,
      timeTo,
    });
    res.status(200).json({ msg: "hi there", data: getData });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

//getting oppponents
const getOpponents = async (req, res) => {
  const all = await opponent.find();
  res.status(200).json({ msg: "all ooponents", data: all, length: all.length });
};

//filtered search
const searchOpponents = async (req, res) => {
  const { search } = req.body;
  const filter = await opponent.find({
    location: { $regex: search, $options: "i" },
  });

  res.status(200).json({
    filteredData: filter,
  });
};

//my opponents
const myOpponentPostings = async (req, res) => {
  try {
    const { id } = req.user;
    const myopponentPostings = await opponent.find({ userId: id });
    res.status(200).json({ msg: "Done", data: myopponentPostings });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const delMyOpponents = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;
    const del = await opponent.findOneAndDelete({ _id: id, userId });
    res.status(200).json({ msg: "deleted", data: del });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const updateMyOpponents = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;
    const {
      teamName,
      location,
      averageAge,
      contact,
      venue,
      gender,
      date,
      level,
      timeFrom,
      timeTo,
    } = req.body;

    const update = await oppponent.findOneAndUpdate(
      { _id: id, userId },
      {
        teamName,
        location,
        averageAge,
        contact,
        venue,
        gender,
        matchDate: date,
        level,
        timeFrom,
        timeTo,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ msg: "update data", updatedData: update });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCredentials,
  setCredentials,
  playerData,
  setOpponent,
  getOpponents,
  searchOpponents,
  myOpponentPostings,
  delMyOpponents,
  updateMyOpponents,
};
