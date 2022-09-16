const express = require('express');
const { getEntity } = require('../controllers/entity');

const router = express.Router();

router.get("/getEntity/:range1/:range2", getEntity)

module.exports = router