const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
   {
    
        fname:{
            type: String,
            required : [true, "Please enter the value"]
        },
        lname:{
            type: String,
            required : [true, "Please enter the value"]
        },
        email:{
            type: String,
            required : [true, "Please enter the value"],
            unique: [true,"Email address already exist"]
            
        },
        DepartmentId:{
            type: String,
            required : [true, "Please enter the value"]
        },
        password:{
            type: String,
            required : [true, "Please enter the value"]
        }
    }
)
const Product = mongoose.model('Product', productSchema )
module.exports= Product;