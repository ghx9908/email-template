// send.js

var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '2460013249@qq.com', // 你的账号
    pass: 'rivnzjbvnsfmdiij', //你的qq授权码
  },
});
var mailOptions = {
  from: '"nick" <2460013249@qq.com>', // 你的账号名 | 你的账号
  to: '2037807344@qq.com', // 接受者,可以同时发送多个,以逗号隔开
  subject: 'test', // 标题
  html: fs.createReadStream(path.resolve(__dirname, './dist/test.html')), // 指定发送文件路径
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('发送成功');
});
