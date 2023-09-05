const users = []
const bcrypt = require('bcrypt');
const { Collection } = require('mongoose')
const Product = require('D:/Hello world/model/productModel')
//const Department=require('D:/Hello world/model/departments.js')


const getAllV2Users = async(req, res) => {
    const departmentId = req.query.DepartmentId
    if(departmentId==undefined){
        const data = await Product.find(); // Fetch all data from MongoDB
    res.json(data);
    }
    else{
    const result = await Product.find({ DepartmentId: departmentId }).exec(); //Feth users of specific departmrnt
    res.json(result);
    console.log(result)
   }
}

    

const getByv2Id = async (req, res) => {
    const id = req.params.id; 
    console.log(id)
    let user=await Product.findById(id);
    console.log(user)
    res.json({ message: 'user found', data: {user1: user }});
}
const postDatav2 = async(req, res) => {
    const {name,email,_password}= req.body;
    const requestData = req.body;
    const poduct= await Product.create(requestData)
    //const hashedpassword = await bcrypt.hashSync(_password, 10);
    //console.log('Hash password' + hashedpassword);
    users.push(poduct)
    res.json(poduct);
}
const updateDatav2 = async(req, res) => {
    const id = req.params.id; 
  let userUpdate = await Product.updateOne({_id:id},req.body)
    console.log(userUpdate)
    let user=await Product.findById(id);
    console.log(user)
    res.json(user);

}
const deleteDatav2 = async(req, res) => {
   const id = req.params.id;
const deletedDocument = await Product.deleteOne({_id:id})
      res.json({ message: 'Document deleted successfully', data: deletedDocument[0] });
}
const getDprtv2Id = async (req, res) => {
    const id = req.params.id; 
    console.log(id)
    let user=await Product.find({ DepartmentId: req.body}).toArray(user)
        console.log(user)
        res.json({ message: 'user found', data: {user1: user }});
    ;
    
}
module.exports = {
    getAllV2Users,
    getDprtv2Id,
    getByv2Id,
    postDatav2,
    updateDatav2,
    deleteDatav2
}