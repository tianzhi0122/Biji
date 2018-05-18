
### Basic
- html5新标签有哪些
- canvas、svg、webGL
- 语义化、SEO
- manifest、worker、socket
- input和textarea的区别
- 用一个div模拟textarea的实现
- css3有什么新特性，浏览器支持怎么样
- 伪类是什么？有哪些？会有哪些兼容性问题？如何处理？
- css预处理器知道吗？用过哪些？有什么优劣？后处理器知道吗？
- 盒模型有哪几种？怪异模式和标准模式？
- less、sass、postcss、prefix
- 层叠优先级
- float清除浮动
- flex布局、 grid布局、table布局
- css以及中轴旋转、动画变换
- 绘制三角形、矩形、菱形、梯形（奇巧淫技，可以不问）
- spirte图（雪碧图）知道吗？svg雪碧图了解吗？
- px、em、rem、vw、vh？rem的根节点样式在什么时候设置？
- position有哪些？他们的定位原点是什么？
- 媒体查询用css好还是用js好？
- link和@import的区别？
- 响应式布局的原理
- css低版本浏览器兼容问题，额外需要什么后缀来声明浏览器兼容
- !important意义，是否应当规避使用？
- BFC块级上下文、IFC，实现双栏高度对齐
- BEM命名法，有什么优势，有什么劣势
- 1px边框问题
- （水平）居中有哪些实现方式、（垂直）居中有哪些实现方式
- typeof以及弱类型转换规则？NaN、undefined、null
- dom的节点操作？能够背api还是知道api？
- ajax是什么？知道底层实现原理吗？知道fetch吗？自己封装过吗？
- GET、POST意义？restful架构下还有别的什么请求？OPTION请求是什么？
- 事件冒泡和事件捕获是怎样的？对应的默认方法有什么？一般在什么情况使用？
- call、apply、bind
- 如何判断数据类型
- hoisting是什么？具体表现是怎样的？
- 匿名函数是什么？函数表达式和函数声明的区别
- let、const暂时性锁区知道吗？表现是怎样的？
- 严格模式是什么？有什么好处？'use strict'
- arguments是什么类型？callee和caller有什么区别？
- Date.format实现过吗？思路是怎样的？
- 动画：setTimeout何时执行，requestAnimationFrame的优点


### Browser
- 打开一个网页经历了那些过程？
- 浏览器加载白屏是什么原因？
- 千万访问量的项目，前端需要注意些什么？
### JavaScript

- 表达式和语句有什么区别？如何把语句转换为表达式？
- 什么叫执行上下文栈(Execution Context Stack)? 一个函数调用会产生多少个上下文环境？如何激活一个上下文，什么叫caller(调用者)，什么叫callee(被调用者)？给你一段代码能否画出执行过程中的上下文堆栈变化？
- 执行上下文包括哪些结构(状态/属性)，如何追踪关联代码的执行进度？
- eval在调用的时候有哪些特别的地方？eval函数自身会产生上下文吗？会影响当前的调用上下文吗？
- 什么叫变量对象？什么叫活动对象？
- 词法作用域是什么？闭包是如何形成的？
- var foo = function bar () {} 命名函数表达式中(上述的foo函数)bar变量是定义在哪一层作用域的？
(0, 1, 2) 的结果是什么？
- var foo = { value: 2, bar: function () { return this.value; } 中(foo.bar, foo.bar)()的this值是什么？(foo.bar = foo.bar)()、(false || foo.bar)()呢?
- Application

- 继承（重点）
- 异步（重点）
- new操作符做了什么
- JavaScript 内存管理
- 实现一个Promise
- js模块化现状？AMD和CMD是什么？
- 如何在前端解析二进制？流媒体、图片二进制数据怎样渲染到页面上？
- 函数记忆是什么？什么场景下使用？（动态规划）
- 实现一个Lazyman Answer 1 Answer 2
- 实现throttle和debounce (必会)
- require.js的实现原理，webpack的实现原理与loader的实现
- Babel是如何实现的
- 如何用正则表达式实现模板引擎？（正则表达式相关知识点）
### HTML
- 讲一下whatwg标准上的event loop规范。(别说你没看过
- microTask的有哪些，Task的有哪些？（最好答出来所有的
- 构思一下利用Task和microTask来完成框架层面的时间调度( 比如vue是如何利用microTask来实现batch update的
- 讲一下你对web components的理解
- web worker适合哪些场景
- Function Program
- 闭包（重点）
- 柯里化（Currying）
### HTTP
- http1.0和http1.1的区别
- http请求码有哪些？206、302、303、304、307
- 能说下304具体怎样实现吗？
- http缓存逻辑是怎样的？协商缓存与强缓存？Last-Modified / Etag / Expires / Cache-Control ？
osi七层协议和tcp/ip四层协议
- 三次握手和四次握手
- 跨域是什么？http协议中如何判断跨域？如何解决跨域问题？
- http2具体内容？SDPY了解么？
- HTTPS如何实现？tsl/ssl是什么？对称加密、非对称加密在什么时候、对什么数据加密？
- DNS劫持是什么？
### Optimization
- 首屏优化
- 预加载资源、预解析DNS
- 懒加载图片怎么做
- iframe一般怎么使用？
- window.onload、document.ready顺序？iframe会阻塞吗？
- cdn是什么？如何查找最近的cdn？
- gzip、chucked
- 前端安全：xss攻击和防范、CSRF、CORS
- 硬件加速怎样开启
- 优化中会提到缓存的问题，问：静态资源或者接口等如何做缓存优化
- 页面DOM节点太多，会出现什么问题？如何优化？
### Products

- 一个feed流，有哪些展现方式？如果当前页面可视区有5个格子，而你有20条信息需要展示，请问有哪些自动展示的算法？
- 移动端的缓存机制有哪几种？
- 小程序如何与native通信？react-native实现原理？jsbridge如何实现？
- 过万条数据如何加载和渲染？
- 如何在前端解析二进制，流媒体、图片二进制数据怎样渲染到页面上？
- 如何解析二进制音频、视频？
- 文件如何显示上传百分比？
- 如何制作一个富文本，需要考虑哪些结构？
- html5的播放器怎么做？视频直播如何在浏览器里面实现？HLS、RTMP
- 如何在浏览器里面裁剪图片？如何裁剪视频，对视频做逐帧分析？
- 如何实现一个具有引导功能的组件库？
- 如何封装一个Form和FormItem，使其能够跟input、select、checkbox、radio等组件进行 数据存储、数据校验（自定义逻辑）、校验反馈？
- echart这类图像库的实现原理？
- i18n的国际化方案应该是怎样的？
- 数据埋点的意义是什么？应当针对哪些数据进行埋点？如何构建一个埋点系统？
- 小程序的实现原理是什么？这【五篇】文章将带你深入了解「微信小程序」
- 小游戏的实现原理是什么？Cocos知乎文章：微信小游戏上手、深入理解使用白鹭引擎开发微信小游戏的构建机制
- mpvue这样h5转小程序的工具的原理是什么？怎样去实现？官方宣传文档、如何看待美团开源mpvue

### Whiteboard
- 前端所需要的白板面试题算法难度不高，主要针对JavaScript基础类型的遍历与扩展。
- 但是如果有喜欢考算法题的，可能会考的很难。所以还是推荐如果有时间的话，可以去把leetcode的easy和medium刷一下，hard可以跳过不看。


- parseQuery
- flatten
- 乱序算法（Fisher–Yates）
- 模版引擎
- 反转二叉树
- 将两个有序数组合并成为一个有序数组
- 全选和单行选中的联动
- 数组去重，考虑object、NaN、数字1，弱类型转换
- 汉诺塔的实现
- bind
- currying
- 一个无重复元素的数组，求所有两数之和为k的组合
- 变体题：一个无重复元素的数组，求元素和（元素个数小于n）为k的组合
- 实现events(发布订阅/观察者模式)
- 找出数组中最大的两数之差
- 棋盘最短路：动态规划、搜索+剪枝、时间优化、空间优化
- 二叉树遍历：前序、后序、中序，时间复杂度，空间复杂度O(1)，递归非递归
- 双向链表寻找中间的元素，单向链表寻找中间的元素
- 查找数组中第k大的数
- System Design


### React
- React的生命周期mount和update描述下
- React的生命周期中的isBatchingUpdates了解吗？Transaction知道吗
- React的vdom如何实现？jsx是怎样解析的？
- React的Fiber是什么？具有什么样的特性？
- React的diff/patch算法原理
- React的组件逻辑（受控、非受控）？如何设计一个组件库
- React的数据流，Redux、Mobx、Rxjs，发布订阅模式、观察者模式，flux和no-flux
- React的事件注册和事件分发知道吗？
- Redux解决了什么痛点（有什么优点），又有什么缺点
- Redux的中间件有哪些？redux-actions、redux-promise、redux-thunk、redux-saga、redux-immutable了解过哪些？说说中间件的意义
- Redux有什么优化方案？
- SSR了解过吗？怎样做？了解Koa么？
- React-Native了解过吗？JavascriptCore是什么？
### Vue
- Vue是如何设计响应式系统的？（依赖收集）
- 什么时候使用computed, methods, watch？之间有什么样区别？
- template 和 render(jsx) 有什么的联系？
- this.$nextTick是如何设计的？
- Vue 组件 data 为什么必须是函数？
### AngularJS
尽管angularJS已经基本退出了历史舞台，但是相信有的同学还是做过相关的项目，并很有可能被面试官问起。

- angularJS的数据绑定采用什么机制？详述原理
- 如果通过angularJS的 directive/component 规划一套全组件化体系，可能遇到哪些挑战？
- 一个angularJS应用应当如何良好地分层？
- ng-click中写的表达式，能使用JS原生对象上的方法，比如Math.max之类的吗？为什么？
### Wheel

- 项目结构
- 执行时间
- 代码运行沙箱
- 数据绑定简介
- 基于-ES6-代理的数据绑定
- 自定义元素
- 客户端路由
### Nodejs
- node各种模块
- 如何通过饿了么 Node.js 面试进入阿里


++++++++++++++++++++++++++++下面是高级开发工程师

### Operating System
- 进程与线程
- 虚拟地址，物理地址
- 进程间通信：临界区、忙等待互斥、睡眠与唤醒、信号量、互斥量、管程、消息传递、屏障、避免锁
- 进程调度策略：批处理、交互式、实时；
- 批处理调度：FCFS、SJF、SRTF
- 交互式调度：轮转、优先级、多级队列、最短进程优先、保证调度、彩票调度、公平分享调度
- 实时调度：硬实时、软实时、周期性
- IPC问题：读者-写者、生产者-消费者、哲学家进餐、银行家算法
- 页面置换算法：最优页面置换算法、最近未使用页面置换算法（NRU）、先进先出页面置换算法（FIFO）、第二次机会页面置换算法、时钟页面置换算法（clock）、最近最少使用页面置换算法（LRU）、软件模拟LRU、工作集页面置换算法、工作集时钟页面置换算法
### Computer Organization
- 缺页中断——FIFO、LRU、OPT三种置换算法
- 流水线、指令集
### Network
- 帧、报文、报文段、分组、包、数据报的概念
- DNS原理
- UDP和TCP
- 可靠性数据传输原理、拥塞控制原理
- 路由选择：RIP、OSPF、BGP
- 差错检验和纠正技术
- 计算机网络安全
### Algorithm
- 递归与非递归
- 排序算法（8种）
- 栈、队列、散列表、二叉树、红黑树
- 动态规划、贪心、平摊分析
- B树、二项堆、斐波那契堆、不相交集合
- 最小生成树Kruskal和Prim，最短路Dijstra和Bellman-Ford
- 最短路Floyd-Warshall和Johnson，最大流Ford-Fulkerson
- 排序网络、矩阵运算、线性规划、多项式与快速傅立叶变换
- 有限数论，字符串匹配Rabin-Karp和KMP
- 计算几何学、NP完全性、近似算法
### Compliers
- 词法分析、自动机、DFA
- 语法分析、语法制导
- 中间代码、AST树、类型检查
- 堆、栈管理，垃圾回收机制
- 目标代码生成、代码优化
- 指令集并行性
- 并行性与局部性优化
- 过程间分析