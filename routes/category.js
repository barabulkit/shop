const express = require("express");
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', categoryController.add);
router.delete('/:id', categoryController.delete);
router.patch('/:id', categoryController.update);

module.exports = router