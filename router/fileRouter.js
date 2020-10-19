const express = require('express')
const router = express.Router()
const multer = require('multer')

let upload = multer({
    limits:{
        //限制文件大小800k
        fileSize: 800*1024,
        //限制文件数量
        files: 1
    },
    storage: multer.diskStorage({
        // 设置上传后的文件路径
        destination: function (req, file, cb) {
         cb(null,'./public/img')
        },
        // 给上传文件重命名
        filename: function (req, file, cb) {
            // 设置图片名字：上传的key值+时间戳+五位随机数+后缀名
            // 保证名字唯一性：fieldname-Date.now()-pareInt(Math.random()*100000)+'.png'
            cb(null,file.fieldname+'-'+Date.now()+'-'+parseInt(Math.random()*100000)+'.'+file.mimetype.split('/')[1])
        }
    }),
    // 过滤上传文件
    fileFilter: function(req, file, cb){
        // console.log(file)
        let types = ['jpg','jpeg','png','gif']// 允许上传的图片格式
        let arr = file.mimetype.split('/')  //'image/png'
        let tmpType = arr[1] // png
        if (types.indexOf(tmpType) == -1) {
            cb(null, false)// 拒绝文件
        } else {
            cb(null, true)// 接收文件
        }
    }
});

// 'haha'是要上传图片数据的key值 {'haha':图片数据}
let uploadfn = upload.single('haha')
// <input type="file" name="haha">

// 上传文件（只能用post）
/**
 * @api {post} /file/upload 上传图片
 * @apiGroup file
 *
 * @apiParam {String} haha 上传图片的name值
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: 0,
 *    msg: '上传成功'，
 *    imgurl: '/static/imgs/haha-16500003424-4325.png'
 * }
 */
router.post('/upload',(req,res)=>{
  uploadfn(req,res,(err)=>{
    if (err) {
            return res.send({err:-1,msg:'上传图片不能大于800k'})
        }
        if (!req.file) {
            return res.send({err:-2,msg:'上传文件类型错误'})
        }
        let {filename} = req.file
        let imgurl = `/static/img/${filename}` //图片在服务器上的路径
        res.send({err:0,msg:'图片上传成功',imgurl:imgurl})
    })
})

module.exports = router;

