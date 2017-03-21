---
layout:     post
title:      javascript秘密花园
category: blog
description: 读书笔记
---   

JavaScript 秘密花园是一个不断更新，主要关心 JavaScript 一些古怪用法的文档。 对于如何避免常见的错误，难以发现的问题，以及性能问题和不好的实践给出建议， 初学者可以籍此深入了解 JavaScript 的语言特性。   
[地址](http://www.jb51.net/onlineread/JavaScript-Garden-CN/)   

hasOwnProperty：for in循环中，推荐总是使用 hasOwnProperty。不要对代码运行的环境做任何假设，不要假设原生对象是否已经被扩展了。   

## 函数声明方式区别   
- function foo() {}：可以在函数定义前调用   
- var foo = function() {}：这种函数赋值表达式，函数只能在调用前声明   
- var foo = function bar() {}：类似这样的函数赋值表达式，bar 函数声明外是不可见的，这是因为我们已经把函数赋值给了 foo； 然而在 bar 内部依然可见。这是由于 JavaScript 的 命名处理 所致， 函数名在函数内总是可见的。

## this的工作原理   
- 全局范围内：当在全部范围内使用 this，它将会指向全局对象，这个全局对象是 window。
- 函数调用：这里 this 也会指向全局对象。
- 方法调用：指向这个对象，在严格模式下，不存在全局变量，this将返回undefined
- 调用构造函数：new foo()，如果函数倾向于和 new 关键词一块使用，则我们称这个函数是 构造函数。 在函数内部，this 指向新创建的对象。

## 闭包   

- 闭包：打破作用于规则的变量就是闭包。一个局部变量在函数调用完毕之后，没有被清理，以某种形式顽强的活了下来，这种形式就是闭包。
- 注意：函数内部声明变量，一定要使用var，不然就是声明了一个全局变量。
- 作用：读取函数内部变量，让变量始终保持在内存中。
### 循环中的闭包。   

```javascript
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}
```   

## arguments参数   

- 每个函数都包含两个非继承而来的方法，call和apply方法   
- 用途相同，都是在特定的作用于中调用函数   
- 接收参数方面不同，apply()接收两个参数，一个是函数作用于this，另一个是参数数组。call方法和apply方法相同，但传递给函数的参数必须列举出来   

### call和apply方法代码:   

第一个例子：   

```javascript
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum.call(window, 10, 10)); //20
console.log(sum.apply(window,[10,20])); //30
```   

第二个例子：   

```javscript
window.firstName = "diz";
window.lastName = "song";
var myObject = { firstName: "my", lastName: "Object" };
function HelloName() {
  console.log("Hello " + this.firstName + " " + this.lastName, " glad to meet you!");
}
HelloName(); //Hello diz song glad to meet you!
myObject.HelloName = HelloName;
myObject.HelloName(); //Hello my Object glad to meet you!
```   


## bind方法：
支持此方法的浏览器有IE9+、Firefox4+、Safari5.1+、Opera12+、Chrome。它是属于ECMAScript5的方法。直接加入对象。   
示例代码：   

```javascript
window.color = "red";
var o = { color: "blue" };
function sayColor(){
  alert(this.color);
}
var OSayColor = sayColor.bind(o);
OSayColor(); //blue
```

匿名函数代码模式：   

```javascript
function(){
  alert(1);
}();
```   

函数字面量：首先声明一个函数对象，然后执行它。   

```javascript
(function(){
  alert(1);
} ) ( );
```
优先表达式：由于Javascript执行表达式是从圆括号里面到外面，所以可以用圆括号强制执行声明的函数。   

```javascript
( function(){
  alert(2);
} ( ) );
```
Void操作符：用void操作符去执行一个没有用圆括号包围的一个单独操作数。   

```javascript
void function(){
  alert(3);
}()
```
