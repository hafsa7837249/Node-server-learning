const express = require('express');
const { getAllUsers, getById, postData, updateData, deleteData } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:id').get(getById);
router.route('/').post(postData);
router.route('/:id').patch(updateData);
router.route('/:id').delete(deleteData);

module.exports = router