const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const machine_controller = require('../controllers/machine.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', machine_controller.test);
router.get('/list', machine_controller.list);
router.post('/create', machine_controller.create);
router.get('/:id', machine_controller.details);
router.put('/:id/update', machine_controller.update);
router.delete('/:id/delete', machine_controller.delete);

module.exports = router;