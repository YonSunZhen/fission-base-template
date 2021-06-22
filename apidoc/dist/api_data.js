define({ "api": [
  {
    "type": "PUT",
    "url": "/auth/access_token",
    "title": "获取access_token",
    "description": "<p>获取access_token</p>",
    "version": "1.0.0",
    "name": "generateToken",
    "group": "auth",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "instance",
            "description": "<p>用户uid</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "passwd",
            "description": "<p>通过密钥加密密码</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": true,
            "field": "open_id",
            "description": "<p>微信open_id (需要)</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户端id (微信端为wx, web端为web)</p>"
          }
        ]
      }
    },
    "filename": "src/auth/index.ts",
    "groupTitle": "auth",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/auth/access_token"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/auth/login_info",
    "title": "获取用户登陆信息",
    "description": "<p>获取用户登陆信息</p>",
    "version": "1.0.0",
    "name": "getLoginInfo",
    "group": "auth",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "open_id",
            "description": "<p>open_id</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>wx || web</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "access_token",
            "description": "<p>access_token</p>"
          }
        ]
      }
    },
    "filename": "src/auth/index.ts",
    "groupTitle": "auth",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/auth/login_info"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/auth/open_id",
    "title": "获取密钥协商算法公钥",
    "description": "<p>小程序端获取openId</p>",
    "version": "1.0.0",
    "name": "getOpenId",
    "group": "auth",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "js_code",
            "description": "<p>小程序临时登陆凭证</p>"
          }
        ]
      }
    },
    "filename": "src/auth/index.ts",
    "groupTitle": "auth",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/auth/open_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/auth/public_key",
    "title": "获取密钥协商算法公钥",
    "description": "<p>获取密钥协商算法公钥</p>",
    "version": "1.0.0",
    "name": "getPublicKey",
    "group": "auth",
    "filename": "src/auth/index.ts",
    "groupTitle": "auth",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/auth/public_key"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/auth/secret_key",
    "title": "验证并修改密钥",
    "description": "<p>验证客户端与服务器端secretKey是否一致</p>",
    "version": "1.0.0",
    "name": "updateSecretKey",
    "group": "auth",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "instance",
            "description": "<p>uid号</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "public_key_id",
            "description": "<p>密钥id 用于服务端获取3个公钥</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "pub_result_n",
            "description": "<p>client public result number (两端都需要)</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "secret_key_hash",
            "description": "<p>通过密钥加密之后的hash密钥 (两端都需要)</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户端id (微信端为wx, web端为web)</p>"
          }
        ]
      }
    },
    "filename": "src/auth/index.ts",
    "groupTitle": "auth",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/auth/secret_key"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/devices",
    "title": "添加设备",
    "description": "<p>添加设备</p>",
    "version": "1.0.0",
    "name": "addDevice",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "company_device_no",
            "description": "<p>公司设备编号</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>设备类型id</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "supplier",
            "description": "<p>供应商</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "details",
            "description": "<p>备注</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "imei",
            "description": "<p>识别码</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "market_date",
            "description": "<p>出厂日期</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/device_borrow_records/borrow",
    "title": "扫码借用设备",
    "description": "<p>扫码借用设备</p>",
    "version": "1.0.0",
    "name": "addDeviceBorrow",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/device_borrow_records/borrow"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/devices/:device_no",
    "title": "管理员删除设备",
    "description": "<p>管理员删除设备</p>",
    "version": "1.0.0",
    "name": "deleteByNo",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices/:device_no"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/devices",
    "title": "获取设备列表",
    "description": "<p>获取设备列表</p>",
    "version": "1.0.0",
    "name": "getDevice",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "category_id",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "supplier",
            "description": "<p>供应商</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "details",
            "description": "<p>备注</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "imei",
            "description": "<p>imei</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "market_date",
            "description": "<p>出厂日期</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_no",
            "description": "<p>页码</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_size",
            "description": "<p>页大小</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/devices_categories",
    "title": "获取设备类型列表",
    "description": "<p>获取设备类型列表</p>",
    "version": "1.0.0",
    "name": "getDeviceCategory",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices_categories"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/device_borrow_records/current_borrower/:user_uid",
    "title": "查询用户当前借用记录",
    "description": "<p>查询用户当前借用记录</p>",
    "version": "1.0.0",
    "name": "getDeviceCurrentBorrowRecord",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "user_uid",
            "description": "<p>用户uid</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/device_borrow_records/current_borrower/:user_uid"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/devices/qr_code",
    "title": "获取设备二维码列表",
    "description": "<p>获取设备二维码列表</p>",
    "version": "1.0.0",
    "name": "getDeviceQrCode",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": false,
            "field": "qr_type",
            "description": "<p>借用:1 归还0</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "category_id",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "supplier",
            "description": "<p>供应商</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "imei",
            "description": "<p>imei</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices/qr_code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/devices_user_rs/:admin_uid",
    "title": "获取管理员名下设备列表",
    "description": "<p>获取管理员名下设备列表</p>",
    "version": "1.0.0",
    "name": "getDeviceUserRs",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "admin_uid",
            "description": "<p>管理员uid</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_no",
            "description": "<p>页码</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_size",
            "description": "<p>页大小</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices_user_rs/:admin_uid"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/devices/:device_no",
    "title": "修改设备信息",
    "description": "<p>修改设备信息</p>",
    "version": "1.0.0",
    "name": "putDevice",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "supplier",
            "description": "<p>供应商</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "details",
            "description": "<p>备注信息</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "imei",
            "description": "<p>imei</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "market_date",
            "description": "<p>出厂日期</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/devices/:device_no"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/device_borrow_records/return/user",
    "title": "扫码归还设备",
    "description": "<p>扫码归还设备</p>",
    "version": "1.0.0",
    "name": "returnDevice",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/device_borrow_records/return/user"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/device_borrow_records/return/admin",
    "title": "管理员归还设备",
    "description": "<p>管理员归还设备</p>",
    "version": "1.0.0",
    "name": "returnDeviceAdmin",
    "group": "device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "filename": "src/device/index.ts",
    "groupTitle": "device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/device_borrow_records/return/admin"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/dq-devices",
    "title": "添加DQ设备",
    "description": "<p>添加DQ设备</p>",
    "version": "1.0.0",
    "name": "addDqDevice",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "asset_no",
            "description": "<p>资产编号</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "specification_type",
            "description": "<p>规格类型</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>位置</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": true,
            "field": "details",
            "description": "<p>设备详情</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq-devices"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/dq_device_borrow_records/borrow",
    "title": "扫码借用设备",
    "description": "<p>扫码借用设备</p>",
    "version": "1.0.0",
    "name": "addDqDeviceBorrow",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "dq_device_id",
            "description": "<p>设备id</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": true,
            "field": "intention",
            "description": "<p>用途</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": true,
            "field": "project_name",
            "description": "<p>所属项目</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_device_borrow_records/borrow"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/dq_devices/:dq_device_id",
    "title": "管理员删除DQ设备",
    "description": "<p>管理员删除DQ设备</p>",
    "version": "1.0.0",
    "name": "delDqDevice",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "dq_device_id",
            "description": "<p>设备id</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_devices/:dq_device_id"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/dq_device_borrow_records/export2mail",
    "title": "导出DQ设备借用记录到邮箱",
    "description": "<p>导出DQ设备借用记录到邮箱</p>",
    "version": "1.0.0",
    "name": "exportDqDeviceBorrowRecord",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "dq_device_id",
            "description": "<p>设备id 数组形式</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_device_borrow_records/export2mail"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/dq_devices",
    "title": "获取DQ设备列表",
    "description": "<p>获取设备列表</p>",
    "version": "1.0.0",
    "name": "getDqDevice",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "dq_device_id",
            "description": "<p>设备id</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "asset_no",
            "description": "<p>资产编号</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "specification_type",
            "description": "<p>规格类型</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>位置</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "details",
            "description": "<p>设备详情</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_no",
            "description": "<p>页码</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_size",
            "description": "<p>页大小</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_devices"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/dq_device_borrow_records/current_borrower/:user_uid",
    "title": "查询用户当前借用记录",
    "description": "<p>查询用户当前借用记录</p>",
    "version": "1.0.0",
    "name": "getDqDeviceBorrowRecord",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "user_uid",
            "description": "<p>用户uid</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_device_borrow_records/current_borrower/:user_uid"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/dq_devices/qr_code",
    "title": "获取DQ设备二维码列表",
    "description": "<p>获取DQ设备二维码列表</p>",
    "version": "1.0.0",
    "name": "getDqDeviceQrCode",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "dq_device_id",
            "description": "<p>设备编号</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "asset_no",
            "description": "<p>资产编号</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "specification_type",
            "description": "<p>规格类型</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>位置</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "details",
            "description": "<p>设备详情</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_devices/qr_code"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/dq_devices_user_rs/:admin_uid",
    "title": "获取管理员名下DQ设备列表",
    "description": "<p>获取管理员名下DQ设备列表</p>",
    "version": "1.0.0",
    "name": "getDqDeviceUserRs",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "admin_uid",
            "description": "<p>管理员uid</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_no",
            "description": "<p>页码</p>"
          },
          {
            "group": "query",
            "type": "string",
            "optional": true,
            "field": "page_size",
            "description": "<p>页大小</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_devices_user_rs/:admin_uid"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/dq_device_borrow_records/return",
    "title": "归还DQ设备",
    "description": "<p>归还DQ设备</p>",
    "version": "1.0.0",
    "name": "returnDqDevice",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "dq_device_id",
            "description": "<p>设备id</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "actual_usage_time",
            "description": "<p>使用时长</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_device_borrow_records/return"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/dq_devices/:dq_device_id",
    "title": "修改DQ设备信息",
    "description": "<p>修改DQ设备信息</p>",
    "version": "1.0.0",
    "name": "updateDqDevice",
    "group": "dq-device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "string",
            "optional": false,
            "field": "dq_device_id",
            "description": "<p>设备编号</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "device_name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "asset_no",
            "description": "<p>资产编号</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "specification_type",
            "description": "<p>规格类型</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>位置</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": true,
            "field": "details",
            "description": "<p>设备详情</p>"
          }
        ]
      }
    },
    "filename": "src/dq-device/index.ts",
    "groupTitle": "dq-device",
    "sampleRequest": [
      {
        "url": "https://itc.desaysv.com/api/develop/dq_devices/:dq_device_id"
      }
    ]
  }
] });
