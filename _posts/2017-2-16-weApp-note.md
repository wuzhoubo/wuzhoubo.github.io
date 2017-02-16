---
layout:     post
title:      微信小程序
category: blog
description: 开始编写微信小程序
---   
小程序是一种不需要安装的下载即可使用的应用，用户可以通过扫一扫或者搜一下即可打开应用，体现了“用完即走”的概念，用户不用关系是否安装太多应用。应用将无处不在，随时可用，但又无需下载。

### 没用过小程序的朋友，我们先来见识一下小程序吧   
现在的微信，默认是没有小程序入口的，除非你使用过小程序，在发现里面，有小程序的入口。
![](images/newImg/15.png)
想要使用小程序，在微信里面搜索一个小程序名字，例如搜索我们经常用到的车来了，打开车来了app。以后打开微信在发现的最后就能找到小程序的入口了。  
使用过的微信小程序列表
![](images/newImg/16.png)
另外给大家一个小程序应用商店，里面目前有一千多个小程序，[地址](http://www.saas-store.cn/)

### 小程序的开发
微信提供了一个开发者工具，可以用来开发公众号或者小程序，首先下载这个开发工具。
微信小程序开发工具[下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)   
如果你是要开发一个上线的小程序，那么需要去微信公众平台，申请开发者账号。不过目前小程序只对企业，政府，媒体和其他组织开放注册。   

但这并不妨碍我们学习或者体验下小程序的开发。   

第一次打开开发者工具应该会叫你扫码登录一下，登录之后，选择本地小程序项目。
![](images/newImg/17.png)    
然后点击添加项目，AppID那里选择无appId。名字随意起一个，选择一个文件夹。选中在当前目录创建quick start项目。quick start项目的意思是一个让你快速学习的简单项目，最后点击添加项目。
![](images/newImg/18.png)     
![](images/newImg/19.png)    

### 微信小程序项目结构
微信小程序每个页面一般有4个文件
![](images/newImg/20.png)    
app.js、app.jspn、app.wxss是全局的配置文件   

1 .wxml 相当于html文件   
2 .wxss 相当于css文件   
3 .js  js文件   
4 .json 页面配置文件   

[微信小程序文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)   
[微信小程序开发者平台](http://www.henkuai.com/forum.php)   
