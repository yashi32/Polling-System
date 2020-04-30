const express = require('express');
const router = express.Router();

//route to /question
router.use('/questions',require('./questions'));

//route to /options
router.use('/options',require('./options'));

module.exports= router;