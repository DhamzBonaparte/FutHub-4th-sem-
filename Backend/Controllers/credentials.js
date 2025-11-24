const login = require("../Model/login");
const signup = require("../Model/signup");
const bcrypt = require("bcrypt");

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

    res.status(200).json({
      msg: "Login successful",
      data: {
        id: approved._id,
        email: approved.email,
        firstName: approved.firstName,
        lastName: approved.lastName,
      },
      status: "completed",
    });
    console.log(correctPassword);
  } catch (err) {
    res.status(400).json({
      msg: "Username or Password is incorrect.",
      error: err.message,
      status: "Terminated",
    });
  }
};

const setCredentials = async (req, res) => {
  const { firstName, lastName, email, password, teamName, agreedToTerms } =
    req.body;

  const newPassword = await bcrypt.hash(password, 13);

  try {
    const insert = await signup.create({
      firstName,
      lastName,
      email,
      password: newPassword,
      teamName,
      agreedToTerms,
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

module.exports = { getCredentials, setCredentials };
