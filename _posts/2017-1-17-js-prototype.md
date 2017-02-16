---
layout:     post
title:      js原型链和js属性操作
category: blog
description: 下拉选择树插件
---   
### js创建对象的两种方法   

```javascript
//创建普通对象
var obj = {
  a:1,
  b:2
}
//创建函数对象
function func(){

}

```   

首先来观察项两种创建对象的方法有什么不同    

### 普通的对象   

![](images/newImg/12.png)   
创建的obj的对象除了我们定义的a这个属性之外，还有一个__proto__的属性，这个属性最终指向Object   
但是obj的prototype是undefined   

### 函数对象   

![](images/newImg/13.png)   

### 创建对象/原型链   

![](images/newImg/14.png)  
