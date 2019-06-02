const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const projeto_controller = require('../controllers/projeto.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', projeto_controller.test);
router.post('/create', projeto_controller.projeto_create);
router.get('/:id', projeto_controller.projeto_details);
router.put('/:id/update', projeto_controller.projeto_update);
router.delete('/:id/delete', projeto_controller.projeto_delete);

module.exports = router;