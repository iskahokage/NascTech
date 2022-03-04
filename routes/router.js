const express = require('express');
const router = express.Router();
const ArticeController = require('../controllers/articleController');

router.get('/articles', ArticeController.getAll)

router.get('/article/:id', ArticeController.getOne)
router.delete('/article/:id', ArticeController.delete)
router.post('/article', ArticeController.create)
router.patch('/article/:id', ArticeController.update)


module.exports = router;