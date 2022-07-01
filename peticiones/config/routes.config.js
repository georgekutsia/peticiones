const express = require("express");
const router = express.Router();
const miscelaneous = require("../controllers/miscelaneous/miscelaneous.controller");

router.get('/', miscelaneous.layouts);

module.exports = router;