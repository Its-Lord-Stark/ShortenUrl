const express = require("express")
const { handleGenerateNewShortURL} = require('../controllers/url');
const { model } = require("mongoose");
const router = express.Router();

router.post("/" , handleGenerateNewShortURL);

module.exports = router;