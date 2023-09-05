const express = require('express');
const {getDprtv2Id,getByv2Id,postDatav2,updateDatav2,deleteDatav2,getAllV2Users} = require('D:/Hello world/controllers/v2userController')
const router = express.Router();

router.route('/').get(getAllV2Users);
router.route('/:id').get(getByv2Id);
router.route('/').post(postDatav2);
router.route('/:id').patch(updateDatav2);
router.route('/:id').delete(deleteDatav2);
router.route('/').get(getDprtv2Id);


module.exports = router