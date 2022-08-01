const express = require('express');
const router = express.Router();

const controller = require("../controllers/UserController.js")

//router.get('/', (req, res) => {
//  res.send('User: Kelvin Novais');
//})
// Instead of the previous code, to use the controller, it must be in the following way:
router.get('/', controller.get);

module.exports = router;
