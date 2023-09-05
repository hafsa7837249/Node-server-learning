const express = require('express');
const { postData, getAllDepartments, getDeprtById, updatedepartment, deleteDepartment, Get}= require('D:/Hello world/controllers/departmentController.js');
const router = express.Router();


router.route('/').post(postData);
router.route('/').get(getAllDepartments);
router.route('/:id').get(getDeprtById);
router.route('/:id').patch(updatedepartment);
router.route('/:id').delete(deleteDepartment);
router.route('/:id').get(Get);


module.exports = router