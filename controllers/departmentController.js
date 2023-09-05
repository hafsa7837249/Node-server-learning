const users = []
const Department = require('D:/Hello world/model/departments')
const Users = require ('D:/Hello world/model/productModel')
const postData = async(req, res) => {
    const requestData = req.body;
    const poduct= await Department.create(requestData)
    users.push(poduct)
    res.json(poduct);}

const getAllDepartments = async(req, res) => {
        const data = await Department.find(); // Fetch all data from MongoDB
        res.json(data);
        console.log(data)}  

const getDeprtById = async (req, res) => {
            const id = req.params.id; 
            console.log(id)
            let user=await Department.findById(id);
            console.log(user)
            res.json(user);
        } 
const updatedepartment = async(req, res) => {
            const id = req.params.id; 
          let userUpdate = await Department.updateOne({_id:id},req.body)
            console.log(userUpdate)
            let user=await Department.findById(id);
            console.log(user)
            res.json(user);
        }
const deleteDepartment = async(req, res) => {
            const id = req.params.id;
         const deletedDocument = await Department.deleteOne({_id:id})
               res.json({ message: 'Document deleted successfully', data: deletedDocument[0] });
         }
const Get = async (req, res) => {
            const id = req.params.id; 
            console.log(id)
            let user=await Users.findById(id);
            console.log(user)
            res.json(user);
        } 


    module.exports = {
postData,
getAllDepartments,
getDeprtById,
updatedepartment,
Get,
deleteDepartment
    }