const nodemailer = require("nodemailer");

// 创建发送邮件对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",// 邮件发送者的邮箱主机
  port: 465,// 端口号
  secure: true, // 端口号为465是为true,其他端口为fales
  auth: {
    user: '916103747@qq.com', // 邮件发送者的邮箱地址
    pass: 'bvnrvepunschbfai', // 邮件发送者的邮箱smtp授权码
  },
});

function send( email , title , message ){
  // 发送邮件的配置信息
  let info = {
      from: '"xx站管理员" <916103747@qq.com>', // 发送者的邮箱地址
      to: email, // 接收邮件者列表
      subject: title, // 邮件主题
      text: message, // 纯文本邮件内容(二选一)
      // html: "<b>Hello world?</b>", // html格式邮件内容(二选一)
    };

  // 发送邮件
  return new Promise( ( resolve , reject )=>{
    transporter.sendMail( info , ( err )=>{
      if( err ){
        //发送失败
        reject();
      }
      else{
        //发送成功
        resolve();
      }
    } );
  } )
}



module.exports= { send };






