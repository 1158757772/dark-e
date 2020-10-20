const mongoose = require('mongoose');

// 创建一个与数据集合(表)相关的schema对象
let cakeSchema = mongoose.Schema( {
    name : { type : String , required : true },
    price : { type : String , required : true },
    size:{ type : Object , required : true },
    weight:{ type : String , required : true },
    people:{ type : String , required : true },
    taste:{ type : String , required : true },
    rawMaterial:{ type : String , required : true },
    coldStorage:{ type : String , required : true },
    desc : { type : Array , required : true },
    type : { type : String , required : true },
    imgurl : { type : String , required : true }
} );

// 把schema对象转换成与数据集合相关的数据模型
let Cake = mongoose.model( 'cake' , cakeSchema );

module.exports = Cake;