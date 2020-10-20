const express = require('express');

const Food = require('../db/models/cakeModel');

const router = express.Router();

//添加商品
/**
 * @api {post} /cake/add 添加商品
 * @apiGroup cake
 *
 * @apiParam {String} name 商品名称
 * @apiParam {String} price 商品价格
 * @apiParam {Object} size 商品尺寸
 * @apiParam {String} weight 商品重量
 * @apiParam {String} people 商品推荐食用人数
 * @apiParam {String} taste 商品口味
 * @apiParam {String} rawMaterial 商品主要原料
 * @apiParam {String} coldStorage 商品冷藏条件
 * @apiParam {Array} desc 商品描述
 * @apiParam {String} type 商品类别
 * @apiParam {String} imgurl 商品图片
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '商品添加成功'
 * }
 */
router.post( '/add' , ( req , res )=>{
    let { name , price , size , weight , people , taste , rawMaterial , coldStorage , desc , type , imgurl} = req.body;
     
    //空值判断
    if( !name || !price || !size || !weight || !people || !taste|| !rawMaterial|| !coldStorage|| !desc|| !type|| !imgurl){
        return res.send( { err : -1 , msg : '参数不能为空' } );
    }

    //添加数据
    Food.insertMany( { name , price , size , weight , people , taste , rawMaterial , coldStorage , desc , type , imgurl} )
    .then( ()=>{
        res.send( { err : 0 , msg : '商品添加成功' } );
    } )
    .catch( ()=>{ 
        res.send( { err : -2 , msg : '商品添加失败' } );
     } )
} )

// 分类查询
/**
 * @api {post} /food/getType 分类查询
 * @apiGroup food
 *
 * @apiParam {String} type 菜品类型
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '查询成功',
 *    list: [{...},{...}]
 * }
 */
router.post('/getType',(req,res)=>{
    let {type}=req.body
    if (!type) {
      return res.send({err:-1,msg:'参数不能为空'})
    }
    Food.find({type})
    .then((data)=>{
      res.send({err:0,msg:'查询成功',list:data})
    })
    .catch((err)=>{
      res.send({err:-2,msg:'查询失败'})
    })
  })







module.exports = router;