---
layout:     post
title:      downTree.js
category: blog
description: 下拉选择树插件
---   
# downTree   

downTree.js，jquery下拉选择树插件
本插件基于jquery 和 [zTree](http://www.treejs.cn/v3/);

### 引用：   

```javscript
    <script src="jquery.js"></script>
    <script src="jquery.ztree.all.js"></script>
    <link rel="stylesheet" href="zTreeStyle.css"/>
    <script src="downTree.js"></script>
```   

### 使用   

```javascript
<input type="text" placeholder="输入或者选择人" class="test" style="width: 200px;height: 30px;display: block;margin: 0 auto"/>
<script>
$(function(){
    var zNodes = [
        {name: "人事部",children: [
            {name: "张三丰"},
            {name: "李四季"}
        ]},
        {name: "test2",children: [
            {name: "王五福"},
            {name: "赵六祥"}
        ]}
    ];

    //调用downTree方法，其他jQuery也可以.
    $(".test").downTree(zNodes);
})
</script>
```   

[demo](http://wuzhoubo.github.io/dist/downTree/demo/demo.html)
