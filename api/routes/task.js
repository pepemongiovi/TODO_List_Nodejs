const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task');

router.post('/', TaskController.createTask);

router.patch('/:id', TaskController.updateTask);

module.exports = router;