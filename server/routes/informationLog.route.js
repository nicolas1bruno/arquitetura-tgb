const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const informationLog_controller = require('../controllers/informationLog.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', informationLog_controller.test);
router.get('/list', informationLog_controller.list);
router.post('/create', informationLog_controller.create);
router.get('/:id', informationLog_controller.details);
router.put('/:id/update', informationLog_controller.update);
router.delete('/:id/delete', informationLog_controller.delete);

module.exports = router;