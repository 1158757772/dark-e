const express = require('express');

const Food = require('../db/models/foodModel');

const router = express.Router();

//添加商品
/**
 * @api {post} /food/add 添加商品
 * @apiGroup food
 *
 * @apiParam {String} name 商品名称
 * @apiParam {String} size 商品大小
 * @apiParam {String} nums 商品数量
 * @apiParam {String} price 商品单价
 * @apiParam {String} prices 商品总价
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '商品添加成功'
 * }
 */
router.post( '/add' , ( req , res )=>{
    let { name , size , nums , price , prices } = req.body;
    
    //空值判断
    if( !name || !size || !nums || !price || !prices ){
        return res.send( { err : -1 , msg : '参数不能为空' } );
    }

    //添加数据
    Food.insertMany( { name , size , nums , price , prices } )
    .then( ()=>{
        res.send( { err : 0 , msg : '商品添加成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -2 , msg : '商品添加失败' } );
     } )
} )

//删除商品
/**
 * @api {post} /food/del 删除商品
 * @apiGroup food
 *
 * @apiParam {String} id 商品id
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 1,
 *    msg: '商品删除成功'
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
        res.send( { err : 1 , msg : '商品删除成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -3 , msg : '商品删除失败' } );
     } )
} )

//修改商品
/**
 * @api {post} /food/update 修改商品
 * @apiGroup food
 *
 * @apiParam {String} id 商品id
 * @apiParam {String} name 商品名称
 * @apiParam {String} size 商品大小
 * @apiParam {String} nums 商品数量
 * @apiParam {String} price 商品单价
 * @apiParam {String} prices 商品总价
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 2,
 *    msg: '商品修改成功'
 * }
 */
router.post( '/update' , ( req , res )=>{
    let { id , name , size , nums , price , prices } = req.body;
    
    //空值判断
    if( !id || !name || !size || !nums || !price || !prices ){
        return res.send( { err : -4 , msg : '参数不能为空' } );
    }

    //修改数据
    Food.update( { _id : id } , { name , size , nums , price , prices } )
    .then( ()=>{
        res.send( { err : 2 , msg : '商品修改成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -2 , msg : '商品修改失败' } );
     } )
} )







module.exports = router;