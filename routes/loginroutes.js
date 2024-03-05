const express = require("express");
const router = express.Router();
const User = require("../models/signuppage");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSceret = "$sumittingne29041996good";




router.post("/loginUser",async (req, res) => {
    let username = req.body.username;

    try {
      let userData = await User.findOne({ username });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "try login correct creadiantial" });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "try login correct creadiantial" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSceret);
      res.json({ success: true, authToken: authToken });
      console.log("user is find");
    } catch (error) {
      console.log(error);
      res.json({ success: false });
      console.log("user is not find");
    }
  }
);

module.exports = router;
