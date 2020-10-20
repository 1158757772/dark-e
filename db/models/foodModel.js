const mongoose = require('mongoose');

// 创建一个与数据集合(表)相关的schema对象
let foodSchema = mongoose.Schema( {
    name : { type : String , required : true },
    size : { type : String , required : true },
    nums : { type : String , required : true },
    price : { type : String , required : true },
    prices : { type : String , required : true }
} );

// 把schema对象转换成与数据集合相关的数据模型
let Food = mongoose.model( 'foods' , foodSchema );

module.exports = Food;