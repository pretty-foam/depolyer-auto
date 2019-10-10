## Introduction 

 Automated deployment of code to support all git repositories


###Install 

```bash
1.  npm  i node-auto-deployer -g
2.  npm  i pm2 -g(Installed please ignore)
```

###Use

1.Writing webhook requests

   For example, github:
   
   ![Watch the video](http://m.qpic.cn/psb?/V14A7ZHX05CkWj/tQ7fUWgHSt7pftnTHLIowvr8Cbu7H2CVMsxLkkP0vrU!/b/dEwBAAAAAAAA&bo=*wKoAQAAAAADB3Y!&rf=viewer_4)

   Secret Fill in freely     

  Note that ID corresponds to warehouse list ID, warehouse identification


2.Write the local configuration conf.json

 
```javascript
{
    "port":3456,   #port
    "host":"127.0.0.1",  #IP
    "list":[
        {
            "id":2,   #id Corresponding to the ID of the webhook request
            "remoteUrl":"https://github.com/pretty-foam/sourceLearning.git", #Remote Warehouse Address
            "savePath":"./test" #Local Code Save Address
        },
        {
            "id":1,
            "remoteUrl":"https://username:password@gitee.com/mumu-osc/NiceFish.git",   #Private Library User Name Password Format
            "savePath":"./test1"
        }
    ]
}
```

3.Start

```bash
  1. atd add  ****.json(Be sure to add, JSON format)
  2. atd   start 
```

###Relevant instructions

```bash
  start:   atd start 
  stop:    atd stop 
  restart: atd restart
  addConfig:  atd add ***.json
  error Logs: pm2 logs
```



## 介绍

 自动化部署代码，支持所有git仓库

###安装 

```bash
1.  npm  i node-auto-deployer -g
2.  npm  i pm2 -g(已安装请忽略)
```

###使用

1. 编写webhook请求

   例如github：
   
   ![Watch the video](http://m.qpic.cn/psb?/V14A7ZHX05CkWj/tQ7fUWgHSt7pftnTHLIowvr8Cbu7H2CVMsxLkkP0vrU!/b/dEwBAAAAAAAA&bo=*wKoAQAAAAADB3Y!&rf=viewer_4)

   Secret 随便填写        

   注意 id与仓库列表ID对应,仓库识别

2.编写本地配置conf.json

 
```javascript
{
    "port":3456,   #端口
    "host":"127.0.0.1",  #运行
    "list":[
        {
            "id":2,   #id 与webhook请求的id对应
            "remoteUrl":"https://github.com/pretty-foam/sourceLearning.git", #远程仓库地址
            "savePath":"./test" #本地代码保存地址
        },
        {
            "id":1,
            "remoteUrl":"https://username:password@gitee.com/mumu-osc/NiceFish.git",   #私有库用户名密码格式 
            "savePath":"./test1"
        }
    ]
}
```

3.启动

```bash
  1. atd add  ****.json(务必添加，json格式)
  2. atd   start 
```

###相关指令

```bash
  启动  atd start 
  停止  atd stop 
  重启  atd restart
  添加配置 atd add ***.json
  查看错误日记 pm2 logs
```






