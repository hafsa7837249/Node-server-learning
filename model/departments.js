const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
{
    Name:{
        type: String,
        required : [true, "Please enter the value"]
    },
    TeamLead:{
        type: String,
        required : [true, "Please enter the value"]
    },
    Number_of_Employes:{
        type: Number,
        required : [true, "Please enter the value"]
    }
})
const Department = mongoose.model('Department',  ProductSchema)
module.exports= Department;