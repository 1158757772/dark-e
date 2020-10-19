const express = require('express');

const User = require('../db/models/userModel');
const mail = require('../utils/email')

const router = express.Router();

let catchCode = {};

//用户注册接口
/**
 * @api {post} /user/register 用户注册
 * @apiGroup user
 *
 * @apiParam {String} user 用户账号
 * @apiParam {String} pass 账号密码
 * @apiParam {String} email 用户邮箱
 * @apiParam {String} code 邮箱验证码
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 1,
 *    msg: '注册成功'
 * }
 */
router.post( '/register' , ( req , res )=>{
    //res.send( { err : 0 , msg : 'register ok' } )

    //接收数据
    let { user , pass , email , code } = req.body;

    //判断数据是否为空
    if( !user || !pass || !email || !code ){
        return  res.send( { err : -1 , msg : '参数不能为空' } );
    }

    if( code != catchCode[ email ] ){
        return  res.send( { err : -10 , msg : '验证码错误' } );
    }

    //在数据库查找账号是否存在
    User.find( { user : user } )
    .then( ( data )=>{
        if( data.length > 0 ){
            res.send( { err : -2 , msg : '账号已存在' } );
        }
        else{
            //在数据库查找账号不存在，创建账号
            return User.insertMany( { user , pass ,email } );
        }
    } )
    .then( ( data )=>{
        if( data.length > 0 ){
            res.send( { err : 1 , msg : '注册成功' } );
        }
        else{
            res.send( { err : -3 , msg : '注册失败' } );;
        }
    } )
    .catch( ( err )=>{
        console.log(err);
    } );
} )


//用户登录接口
/* router.post( '/login' , ( req , res )=>{
    //接收数据
    let { user , pass , email , code } = req.body;
    
    //判断数据是否为空
    if( !user || !pass || !email || !code ){
        res.send( { err : -4 , msg : '参数不能为空' } );
    }
    else{
        //在数据库查找是否有此账号和密码
        User.find( { user , pass } )
        .then( ( data )=>{
            if( data.length > 0 ){
                res.send( { err : 2 , msg : '账户密码正确，可以登录' } );
            }
            else{
                res.send( { err : -5 , msg : '账户密码错误，请更正' } );
            }
        } )
        .catch( ( err )=>{
            console.log(err);
        } )
    }
} ) */

//用户登录接口
/**
 * @api {post} /user/login 用户登录
 * @apiGroup user
 *
 * @apiParam {String} user 用户账号
 * @apiParam {String} pass 账号密码
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 2,
 *    msg: '账户密码正确，请登录'
 * }
 */
router.post( '/login' , ( req , res )=>{
    //接收数据
    let { user , pass } = req.body;
    
    //判断数据是否为空
    if( !user || !pass ){
        res.send( { err : -4 , msg : '参数不能为空' } );
    }
    else{
        //在数据库查找是否有此账号
        User.find( { user } )
        .then( ( data )=>{
            if( data.length > 0 ){
                //在数据库查找此账号下密码是否正确
                return User.find( { user , pass } );
            }
            else{
                res.send( { err : -5 , msg : '账户错误，请更正' } );
            }
        } )
        .then( ( data )=>{
            if( data.length > 0 ){
                res.send( { err : 2 , msg : '账户密码正确，请登录' } );
            }
            else{
                res.send( { err : -6 , msg : '密码错误，请更正' } );
            }
        } )
        .catch( ( err )=>{
            console.log(err);
        } )
    }
} )

//邮箱验证接口
/**
 * @api {post} /user/verify 邮箱验证码
 * @apiGroup user
 *
 * @apiParam {String} email 用户邮箱
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 3,
 *    msg: '验证码发送成功'
 * }
 */
router.post( '/verify' , ( req , res )=>{
    //接收数据
    let { email } = req.body;
    
    //判断数据是否为空
    if(!email ){
        res.send( { err : -7 , msg : '邮箱栏不能为空' } );
    }
    
    //验证邮箱格式
    if( !/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email) ){
        //不对  
       return res.send( { err : -8 , msg : '邮箱格式不对' } );
    }

    let code = Math.floor( Math.random() * 100000 );

    catchCode[ email ] = code;

    mail.send( email , '邮箱验证码' , '您的验证码是' + code +'，有限期为5分钟' )
    .then( ()=>{
        res.send( { err : 3 , msg : '验证码发送成功' } );
    } )
    .catch( ()=>{
        res.send( { err : -9 , msg : '验证码发送失败' } );
    } )
} )


module.exports = router;