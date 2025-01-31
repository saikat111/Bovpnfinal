const express = require('express');
const { getServerList, getServerDetails, connectToServer } = require('../controllers/serverController');
const router = express.Router();

router.get('/servers', getServerList);
router.get('/servers/:serverId', getServerDetails);
router.post('/servers/:serverId/connect', connectToServer);

module.exports = router;
