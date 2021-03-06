define({ "api": [
  {
    "type": "post",
    "url": "/cake/add",
    "title": "添加商品",
    "group": "cake",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "size",
            "description": "<p>商品尺寸</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>商品重量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "people",
            "description": "<p>商品推荐食用人数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taste",
            "description": "<p>商品口味</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rawMaterial",
            "description": "<p>商品主要原料</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coldStorage",
            "description": "<p>商品冷藏条件</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "desc",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>商品类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>商品图片</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '商品添加成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/cakeRouter.js",
    "groupTitle": "cake",
    "name": "PostCakeAdd"
  },
  {
    "type": "post",
    "url": "/cake/getId",
    "title": "分类查询",
    "group": "cake",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>蛋糕_id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '查询成功',\n   item: {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/cakeRouter.js",
    "groupTitle": "cake",
    "name": "PostCakeGetid"
  },
  {
    "type": "post",
    "url": "/cake/getType",
    "title": "分类查询",
    "group": "cake",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>蛋糕类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 0,\n   msg: '查询成功',\n   list: [{...},{...}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/cakeRouter.js",
    "groupTitle": "cake",
    "name": "PostCakeGettype"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>账号密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 2,\n   msg: '账户密码正确，请登录'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "用户注册",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>账号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 1,\n   msg: '注册成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserRegister"
  },
  {
    "type": "post",
    "url": "/user/verify",
    "title": "邮箱验证码",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 3,\n   msg: '验证码发送成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user",
    "name": "PostUserVerify"
  }
] });
