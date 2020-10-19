const mongoose = require('mongoose');

// 创建一个与数据集合(表)相关的schema对象
let userSchema = mongoose.Schema( {
    user : { type : String , required : true },
    pass : { type : String , required : true },
    email : { type : String , required : true }
} );

// 把schema对象转换成与数据集合相关的数据模型
let User = mongoose.model( 'users' , userSchema );

module.exports = User;