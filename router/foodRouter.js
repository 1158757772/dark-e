const express = require('express');

const Food = require('../db/models/foodModel');

const router = express.Router();

//添加菜品
/**
 * @api {post} /food/add 添加菜品
 * @apiGroup food
 *
 * @apiParam {String} name 菜品名称
 * @apiParam {String} price 菜品价格
 * @apiParam {String} desc 菜品描述
 * @apiParam {String} type 菜品类型
 * @apiParam {String} imgurl 菜品图片
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '菜品添加成功'
 * }
 */
router.post( '/add' , ( req , res )=>{
    // let data = {
    //     name : '佛跳墙',
    //     price : '1000',
    //     desc : '十全大补汤',
    //     type : '热菜',
    //     imgurl : '/static/img/1.jpg'
    // }
    let { name , price , desc , type , imgurl } = req.body;
    
    //空值判断
    if( !name || !price || !desc || !type || !imgurl ){
        return res.send( { err : -1 , msg : '参数不能为空' } );
    }

    //添加数据
    Food.insertMany( { name , price , desc , type , imgurl } )
    .then( ()=>{
        res.send( { err : 0 , msg : '菜品添加成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -2 , msg : '菜品添加失败' } );
     } )
} )

//删除菜品
/**
 * @api {post} /food/del 删除菜品
 * @apiGroup food
 *
 * @apiParam {String} id 菜品id
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 1,
 *    msg: '菜品删除成功'
 * }
 */
router.post( '/del' , ( req , res )=>{
    let { id } = req.body;
    
    //空值判断
    if( !id ){
        return res.send( { err : -2 , msg : '参数不能为空' } );
    }

    //删除数据
    Food.remove( { _id : id } )
    .then( ()=>{
        res.send( { err : 1 , msg : '菜品删除成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -3 , msg : '菜品删除失败' } );
     } )
} )

//修改菜品
/**
 * @api {post} /food/update 修改菜品
 * @apiGroup food
 *
 * @apiParam {String} id 菜品id
 * @apiParam {String} name 菜品名称
 * @apiParam {String} price 菜品价格
 * @apiParam {String} desc 菜品描述
 * @apiParam {String} type 菜品类型
 * @apiParam {String} imgurl 菜品图片
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 2,
 *    msg: '菜品修改成功'
 * }
 */
router.post( '/update' , ( req , res )=>{
    let { id , name , price , desc , type , imgurl } = req.body;
    
    //空值判断
    if( !id || !name || !price || !desc || !type || !imgurl ){
        return res.send( { err : -4 , msg : '参数不能为空' } );
    }

    //修改数据
    Food.update( { _id : id } , { name , price , desc , type , imgurl } )
    .then( ()=>{
        res.send( { err : 2 , msg : '菜品修改成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -2 , msg : '菜品修改失败' } );
     } )
} )

//分类查询菜品
/**
 * @api {post} /food/getType 分类查询菜品
 * @apiGroup food
 *
 * @apiParam {String} type 菜品类型
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 3,
 *    msg: '分类查询菜品成功',
 *    list: [{...},{...}]
 * }
 */
router.post( '/getType' , ( req , res )=>{
    let { type } = req.body;
    
    //空值判断
    if( !type ){
        return res.send( { err : -4 , msg : '参数不能为空' } );
    }

    //类型查询
    if( type == '全部' ){
        Food.find()
        .then((data)=>{
            res.send( { err : 3 , msg : '分类查询菜品成功' , list : data } );
        })
        .catch( ()=>{ 
            res.send( { err : -5 , msg : '分类查询菜品失败' } );
         } )
    }
    else{
        Food.find( { type } )
        .then( ( data )=>{
            res.send( { err : 3 , msg : '分类查询菜品成功' , list : data } );
        } )
        .catch( ()=>{ 
            res.send( { err : -5 , msg : '分类查询菜品失败' } );
         } )
    }
} )

//关键字查询菜品
/**
 * @api {post} /food/keywords 关键字查询菜品
 * @apiGroup food
 *
 * @apiParam {String} kw 菜品关键字
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 4,
 *    msg: '关键字查询菜品成功',
 *    list: [{...},{...}]
 * }
 */
router.post( '/keywords' , ( req , res )=>{
    let { kw } = req.body;
    
    //空值判断
    if( !kw ){
        return res.send( { err : -6 , msg : '参数不能为空' } );
    }

    //正则表达式
    let reg = new RegExp( kw );

    //关键字查询
    Food.find( {$or : [ { name : { $regex : reg } } , { desc : { $regex : reg } } ]} )
    .then( ( data )=>{
        res.send( { err : 4 , msg : '关键字查询菜品成功' , list : data } );
    } )
    .catch( ()=>{ 
        res.send( { err : -7 , msg : '关键字查询菜品失败' } );
     } )
} )

//分页查询菜品
/**
 * @api {post} /food/getPage 分页查询菜品
 * @apiGroup food
 *
 * @apiParam {String} twig 条数
 * @apiParam {String} page 页数
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 5,
 *    msg: '分页查询菜品成功'，
 *    info: {list:[...],twigs:数据总条数,pages:数据总页数}
 * }
 */
router.post( '/getPage' , ( req , res )=>{
    let twig = req.body.twig || 3;   //每一页条数
    let page = req.body.page || 1;   //第几页
    let twigs = 0;   //数据总条数
    let pages = 0;   //数据总页数

    //查询所有数据
    Food.find()
    .then( ( data )=>{
        twigs = data.length;
        pages = Math.ceil( twigs / twig );

        return Food.find().limit( Number( twig ) ).skip( Number( ( page - 1 ) * twig ) );
    } )
    .then( ( data )=>{
        res.send( { err : 5 , msg : '分页查询菜品成功' , info : { list : data , twigs : twigs , pages : pages } } );
    } )
    .catch( ()=>{
        res.send( { err : -8 , msg : '分页查询菜品失败' } );
    } )
} )




module.exports = router;