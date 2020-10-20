define({ "api": [
  {
    "type": "post",
    "url": "/food/add",
    "title": "添加商品",
    "group": "food",
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
            "field": "size",
            "description": "<p>商品大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nums",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prices",
            "description": "<p>商品总价</p>"
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
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodAdd"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除商品",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 1,\n   msg: '商品删除成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodDel"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "修改商品",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
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
            "field": "size",
            "description": "<p>商品大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nums",
            "description": "<p>商品数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prices",
            "description": "<p>商品总价</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回数据示例:",
          "content": "{\n   err: 2,\n   msg: '商品修改成功'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "food",
    "name": "PostFoodUpdate"
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
