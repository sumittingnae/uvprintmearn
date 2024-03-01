const express = require("express");
const router = express.Router();
const User = require("../models/signuppage");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSceret = "$sumittingne29041996good";



router.post("/sigup", async (req, res) => {
      const salt = await bcrypt.genSalt(10);
  try {
        const secPassword = await bcrypt.hash(req.body.password,salt);
        await User.create({
            name: req.body.name,
            password:secPassword,
            username:req.body.username,
            date:req.body.date
        });
        res.json({success:true})
        console.log("user is create succefully")
  } catch (error) {
    res.json({ success: false });
    console.log("user is not create succefully");
    console.log(error);
  }
});

router.post(
  "/loginUser",

  async (req, res) => {
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
