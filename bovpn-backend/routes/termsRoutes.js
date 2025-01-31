const express = require("express");
const { getTermsOfService } = require("../controllers/termsController");

const router = express.Router();
router.get("/", getTermsOfService);

module.exports = router;
