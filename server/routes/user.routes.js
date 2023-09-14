const express = require("express");
const db = require("../utils/database");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await db.execute("SELECT * FROM user");
    let [rows] = user;
    res.json({
      status: "success",
      user: rows,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { name, password } = req.body;
  try {
    const users = await db.execute("SELECT * FROM user");
    let [rows] = users;
    const user = rows.find(
      (row, i) => row.name == name && row.password == password
    );
    if (user) {
      res.json({
        status: "success",
        user: user,
      });
    } else {
      res.json({
        status: "error",
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
