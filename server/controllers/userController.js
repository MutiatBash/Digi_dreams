const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const Mailgen = require("mailgen");
const validator = require("validator");

const loginUser = async (req, res) => {
  const { email } = req.body;

  if (validator.isEmail(email)) {
    try {
        const user = await User(email);
    
        const makeToken = ({email:email}) => {
          const expirationDate = new Date();
          expirationDate.setHours(new Date().getHours() + 1);
          return jwt.sign({ email, expirationDate }, process.env.JWT_SECRET_KEY);
        };
    
        const token = makeToken(email);
    
        let config = {
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        };
    
        let transporter = nodemailer.createTransport(config);
    
        let mailGenerator = new Mailgen({
          theme: "default",
          product: {
            name: "Admin",
            link: `Magic link sent. : http://localhost:8080/account?token=${token}`,
          },
        });
    
        let response = {
          body: {
            name: name,
            intro:
              "Welcome to Slimnatics! We're very excited to have you on board.This app will help you stay fit and also help you shed off that excess weight",
          },
        };
        let mail = mailGenerator.generate(response);
        let message = {
          from: "olayinka4grace@gmail.com",
          to: email,
          subject: "Welcome",
          html: mail,
        };
        transporter
          .sendMail(message)
          .then(() => {
            return res.send(
              `Magic link sent. : http://localhost:8080/account?token=${token}`
            );
          })
          .catch((error) => {
            res.status(500).json({ msg: error.message });
          });
      } catch (error) {
        res.status(400).json({ error: error.message })
    }
  }else {
    res.status(400).json({ message: "Email is invalid"})
  }
}

  

const getAccount = async (req, res) => {
  isAuthenticated(req, res);
};

const isAuthenticated = (req, res) => {
  const { token } = req.query;
  if (!token) {
    res.status(403);
    res.send("Can't verify user.");
    return;
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch {
    res.status(403);
    res.send("Invalid auth credentials.");
    return;
  }
  if (
    !decoded.hasOwnProperty("email") ||
    !decoded.hasOwnProperty("expirationDate")
  ) {
    res.status(403);
    res.send("Invalid auth credentials.");
    return;
  }
  const { expirationDate } = decoded;
  if (expirationDate < new Date()) {
    res.status(403);
    res.send("Token has expired.");
    return;
  }
  res.status(200);
  res.send("User has been validated.");
};

module.exports = {
  loginUser,
  getAccount,
};
