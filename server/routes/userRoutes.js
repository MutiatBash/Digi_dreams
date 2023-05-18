const express = require('express')
const {loginUser, getAccount} = require('../controllers/userController')

const router = express();

router.post("/login", loginUser);
router.get("/account", getAccount);

module.exports = router;
