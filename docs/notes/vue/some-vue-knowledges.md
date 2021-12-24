# Vue的知识点汇总

来自掘金：[「自我检验」熬夜总结50个Vue知识点，全都会你就是神！！！](https://juejin.cn/post/6984210440276410399)

##   1、Vue的优缺点

优点：渐进式，组件化，轻量级，虚拟DOM，响应式，单页面路由，数据与视图分开

缺点：单页面不利于SEO，不支持IE8以下，首屏加载时间长



## 2、为什么说Vue是一个渐进式框架？

渐进式：通俗地讲就是你想用什么就用什么，不强制要求。你想用component就用，不用也可以，你想用Vuex就用，不用也行。



## 3、Vue和React的异同点

相同点:

- 都使用了虚拟DOM
- 组件化开发
- 都是单向数据流（父子组件之间，不建议子组件修改父组件传下来的数据）
- 都支持服务端渲染

不同点：

- React的JSX，Vue的template
- 数据变化，React手动（setState），Vue自动（初始化已响应式处理，Object.defineProperty）
- React单向绑定，Vue双向绑定
- React的Redux，Vue的Vuex



## 4、MVVM是什么?和MVC有何区别？

MVC

- Model（模型）：负责从数据库中取数据
- View（视图）：负责展示数据的地方
- Controller（控制器）：用户交互的地方，例如点击事件等
- 思想：Controller将Model的数据展示在View上

MVVM

- VM：View-Model，做了两件事达到了数据的双向绑定。一是将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是数据绑定。二是将视图转化成模型，即将所看到的页面转化成后端的数据。实现方式是DOM事件监听。
- 思想：实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作DOM元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变（对应Vue数据驱动的思想）。

区别：

整体来看，MVVM比MVC精简很多，不进简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作DOM元素。因为在MVVM中，View不知道Model的存在，Model和ViewModel也观察不到View，这种低耦合模式提高了代码的可重用性。

Vue是不是MVVM框架？

Vue是MVVM框架，但是不是严格负荷MVVM，因为MVVM规定Model和View不能直接通信，但是Vue的ref可以做到这点。



## 5、Vue和jQuery的区别在哪？为什么放弃jQuery用Vue？

- jq直接操作DOM，Vue不直接操作DOM，Vue的数据与视图是分开的，Vue只需要操作数据即可。
- jq操作DOM频繁，而Vue使用虚拟DOM技术，极大地提高了更新DOM时的性能。
- Vue不提倡直接操作DOM，开发者只需要把大部分精力放在数据层面上。
- Vue集成的一些库，大大提高了开发效率，比如Vuex、VueRouter等



## 6、为什么data是个函数并且返回一个对象？

data之所以是一个函数，是因为一个组件可能会被多处调用，而每一次调用就会执行data函数并返回新的数据对象，这样可避免多处调用之间的数据污染。



## 7、Vue修饰符

|         修饰符         | 作用                                                         |
| :--------------------: | ------------------------------------------------------------ |
|         .lazy          | 改变输入框的值时value不会改变，当光标离开输入框时，v-model绑定的value才会改变。 |
|         .trim          | 把v-model绑定的值的收尾空格过滤掉。                          |
|        .number         | 将值准换成数字，但是先输入字符串和先输入数字，是两种情况。<br />先输入数字的话，只取前面数字部分；<br />先输入字母的话，number修饰符无效 |
|         .stop          | 阻止冒泡                                                     |
|        .capture        | 事件默认是由里向外冒泡，capture修饰符是反过来，由外往内捕获  |
|         .self          | 只有点击事件绑定的本身才会触发事件                           |
|         .once          | 事件只执行一次                                               |
|        .prevent        | 阻止默认事件（比如a标签跳转）                                |
|        .native         | 加载自定义组件的事件上，保证事件能执行                       |
| .left, .right, .middle | 这三个修饰符是鼠标的左中右按键触发的事件                     |
|        .passive        | 当我们在监听元素滚动事件的时候，会一直触发onscroll事件，在pc端没啥问题，但是在移动端，会让我们的网页变卡，因此使用这个修饰符的时候，相当于给onscroll事件整了一个lazy修饰符 |
|         .camel         | 确保参数被识别为驼峰写法                                     |
|         .sync          | 父子组件传值，子组件想更新这个值，使用此修饰符可简写         |



##    8、使用过哪些Vue内部指令？

| 指令      | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| v-text    | 更新元素的textContent                                        |
| v-html    | 更新元素的innerHTML                                          |
| v-show    | 根据表达式真假值，切换元素的display属性，当条件变化时该指令触发过渡效果 |
| v-if      | 根据表达式额度真假值来有条件地渲染元素                       |
| v-else    | 前一兄弟元素必须要有v-if或者v-else-if                        |
| v-else-if | 前一兄弟元素必须要有v-if或者v-else-if                        |
| v-for     | 列表循环渲染，数组、对象、数字、字符都可以                   |
| v-on      | 缩写是@，绑定事件                                            |
| v-bind    | 缩写是: ，用于动态绑定各种变量                               |
| v-model   | 双向绑定表单项的值                                           |
| v-slot    | 缩写是#，插槽名                                              |
| v-once    | 元素和组件只渲染一次                                         |
| v-pre     | 跳过这个元素和它的子元素的编译过程，可以用来显示原始的Mustache标签，跳过大量没有指令的节点会加快编译 |
| v-cloak   | 这个指令保持在元素上直到关联实例结束编译，和css规则如[v-cloak]{ display: none } 一起用时，<br />这个指令可以隐藏未编译的Mustache标签直到实例准备完毕。 |



##   9、组件之间传值的方式有哪些？

- 父组件传值给子组件，子组件使用props进行接收
- 子组件传值给父组件，子组件使用$emit +事件对父组件进行传值
- 组件中可以使用$parent和$children获取到父组件实例和子组件实例，进而获取数据
- 使用$attrs和$listeners，在对一些组件进行二次封装时可以方便传值，例如A -> B -> C
- 使用$refs获取组件实例，进而获取数据
- 使用Vuex进行状态管理
- 使用eventBus进行跨组件触发事件， 从而传递数据
- 使用provide和inject
- 使用浏览器本地缓存，例如localStorage



## 10、路由有哪些模式？又有什么不同？

- hash模式：通过#号后面的内容的更改，触发hashchange事件，实现切换路由
- history模式：通过pushState和replaceState切换url，触发popstate事件，实现切换路由，需要后端配合



##   11、如何设置动态class，动态style？

- 动态class对象

  ```vue
  <div :class="{ 'red': true, 'isRead': true }"></div>
  ```

- 动态class数组

  ```vue
  <div :class="['red', 'isRead' ? 'gray' : '' ]"></div>
  ```

- 动态style对象

  ```vue
  <div :style="{ fontSize: '16px', color: 'yellow' }"></div>
  ```

- 动态style数组

  ```vue
  <div :class="[{ fontSize: '16px', color: 'yellow' }, { fontWeight: '500' }]"></div>
  ```



##   12、v-if和v-show有啥区别

- v-if是通过控制dom元素的删除和生成来实现显示与隐藏，每一次显隐都会使组件重新跑一遍生命周期，因为显隐决定了组件的生成和销毁
- v-show是通过控制dom元素的css样式来实现显隐，不会被销毁
- 频繁或者大数量显隐使用v-show，否则使用v-if



##   13、computed和watch的区别

- computed是依赖已有的变量来计算一个目标变量，大多数情况都是多个变量凑再一起计算出一个变量，并且computed具有缓存机制，依赖值不变的情况下还是会直接读取缓存进行复用，computed不能进行异步操作
- watch是监听某一个变量的变化，并执行相应的回调函数，通常是一个变量的变化决定多个变量的变化，watch可以进行异步操作
- 简单来讲，一般情况下computed是多对一，watch是一对多



## 14、Vue的生命周期

> 按照顺序依次罗列，括号中的是或否表示服务端是否可调用

- beforeCreate（是）：实例了Vue但还没进行数据的初始化与响应式处理
- created（是）：数据已经被初始化和响应式处理，在这里可以访问到数据，也可以修改数据
- beforeMount（否）：render函数在这里被调用，生成虚拟DOM，但是还没被转成真实的DOM并替换到实例
- mounted（否）：在这里，真实DOM挂在完毕
- beforeUpdate（否）：数据更新后，新的虚拟DOM生成，但是还没跟旧的虚拟DOM对比打补丁
- update（否）新旧虚拟DOM对比打补丁后，进行真实DOM的更新
- activated（否）：被keep-alive缓存的组件激活时调用
- deactivated（否）：被keep-alive缓存的组件被停用时调用
- beforeDestroy（否）：实例销毁之前调用，在这一步依然可以访问数据
- destroyed（否）：实例销毁后调用，该钩子被调用后，对应Vue实例的所有指令都被解绑，所有事件监听器被移除，所有的子实例也被销毁。
- errorCaptured（是）：当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发声错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回false以阻止该错误继续想上传播。



## 15、为什么v-if和v-for不建议用在同一标签？

在Vue2中，v-for优先级是高于v-if的，举个例子

```vue
<div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
  {{item}}
</div>
```

上面的写法是`v-for`和`v-if`同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题：

```vue
<div v-for="item in list">
    {{item}}
</div>
```

```js
computed() {
    list() {
        return [1, 2, 3, 4, 5, 6, 7].filter(item => item !== 3)
    }
  }
```



## 16、Vuex有哪些属性？用处是什么？

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- Getter：允许组件从Store中获取数据，mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性。
- Mutation：是唯一更改store中状态的方法，且必须是同步函数。
- Action：用于提交mutation，而不是直接变更状态，可以包含任意异步操作。
- Module：允许将单一的Store拆分为多个store且同时保存在单一的状态树中。



## 17、不需要响应式的数据该怎么处理？

在我们的Vue开发中，会有一些数据，从始至终都`未曾改变过`，这种`死数据`，既然`不改变`，那也就`不需要对他做响应式处理`了，不然只会做一些无用功消耗性能，比如一些写死的下拉框，写死的表格数据，这些数据量大的`死数据`，如果都进行响应式处理，那会消耗大量性能。

```js
// 方法一：将数据定义在data之外
data () {
    this.list1 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    this.list2 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    this.list3 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    this.list4 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    this.list5 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    return {}
 }
    
// 方法二：Object.freeze()
data () {
    return {
        list1: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list2: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list3: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list4: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list5: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
    }
 }
```



## 18、watch有哪些属性，分别有什么用？

当我们监听一个基本数据类型时：

```js
watch: {
  value() {
    // do something
  }
}
```

当我们监听一个引用数据类型时:

```js
watch: {
  obj: {
    handler() { // 回调函数
      // do something
    },
    deep: true, // 是否进行深度监听
    immediate: true // 是否初始执行handler函数
  }
}
```



## 19、父子组件生命周期顺序

> 请朗读并背诵全文~

父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted



## 20、对象新属性无法更新视图，删除属性无法更新视图，为什么？怎么办？

- 原因：Vue2 Object.defineProperty没有对对象的新属性进行劫持
- 对象新属性无法更新视图：使用Vue.$set(obj, key, value)，组件中 this.$set(obj, key, value)
- 删除属性无法更新视图，使用 Vue.$delete(obj, key)，组件中 this.$delete(obj, key)



## 21、直接arr[index] = xxx 无法更新视图原因？该怎么解决？

- 原因：Vue2没有对数组进行Object.defineProperty的属性劫持，所以直接通过数组下标（索引）改变数组数据是无法更新视图的
- 使用数组的splice方法， arr.splice(index, 1, item)，意思是删除原有的再更新，这样Vue就能监测到数据变化更新视图
- 也可以使用Vue.$set(arr, index, value)



## 22、自定义指令

> 参考[8个非常实用的Vue自定义指令](https://www.cnblogs.com/lzq035/p/14183553.html)

在 Vue，除了核心功能默认内置的指令 ( v-model 和 v-show )，Vue 也允许注册自定义指令。它的作用价值在于当开发人员在某些场景下需要对普通 DOM 元素进行操作。

[Vue](http://mp.weixin.qq.com/s?__biz=MzAxODE4MTEzMA==&mid=2650084449&idx=1&sn=534f81cab5b7882e856d5c0221cf8141&chksm=83db8904b4ac001264fcca969aeac10728c032cf888b70c5bb3e63298082008b51d70374cb17&scene=21#wechat_redirect) 自定义指令有全局注册和局部注册两种方式。先来看看注册全局指令的方式，通过 `Vue.directive( id, [definition] )` 方式注册全局指令。然后在入口文件中进行 `Vue.use()` 调用。

批量注册指令，新建 `directives/index.js` 文件

```js
import copy from './copy'
import longpress from './longpress'
// 自定义指令
const directives = {
  copy,
  longpress,
}
 
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
```

在 `main.js` 引入并调用

```js
import Vue from 'vue'
import Directives from './JS/directives'
Vue.use(Directives)
```

指令定义函数提供了几个钩子函数（可选）：

- bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。
- inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
- update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。
- componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
- unbind: 只调用一次， 指令与元素解绑时调用。

举个例子：

v-copy

需求：实现一键复制文本内容，用于鼠标右键粘贴。

思路：

1. 动态创建 `textarea` 标签，并设置 `readOnly` 属性及移出可视区域
2. 将要复制的值赋给 `textarea` 标签的 `value` 属性，并插入到 `body`
3. 选中值 `textarea` 并复制
4. 将 `body` 中插入的 `textarea` 移除
5. 在第一次调用时绑定事件，在解绑时移除事件

```js
const copy = {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        console.log('无复制内容')
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log('复制成功') // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}
 
export default copy
```

使用：给 DOM加上 `v-copy` 及复制的文本即可

```vue
<template>
  <button v-copy="copyText">复制</button>
</template>
 
<script>
  export default {
    data() {
      return {
        copyText: 'a copy directives'
      }
    }
  }
</script>
```



##   23、插槽的使用以及原理



##   24、为什么不建议使用index作为key，为什么不建议用随机数做key？

```js
<div v-for="(item, index) in list" :key="index">{{item.name}}</div>

list: [
    { name: '小明', id: '123' },
    { name: '小红', id: '124' },
    { name: '小花', id: '125' }
]

渲染为
<div key="0">小明</div>
<div key="1">小红</div>
<div key="2">小花</div>

现在我执行 list.unshift({ name: '小林', id: '122' })

渲染为
<div key="0">小林</div>
<div key="1">小明</div>
<div key="2">小红</div>
<div key="3">小花</div>


新旧对比

<div key="0">小明</div>  <div key="0">小林</div>
<div key="1">小红</div>  <div key="1">小明</div>
<div key="2">小花</div>  <div key="2">小红</div>
                        <div key="3">小花</div>

可以看出，如果用index做key的话，其实是更新了原有的三项，并新增了小花，虽然达到了渲染目的，但是损耗性能

现在我们使用id来做key，渲染为

<div key="123">小明</div>
<div key="124">小红</div>
<div key="125">小花</div>

现在我执行 list.unshift({ name: '小林', id: '122' })，渲染为

<div key="122">小林</div>
<div key="123">小明</div>
<div key="124">小红</div>
<div key="125">小花</div>

新旧对比

                           <div key="122">小林</div>
<div key="123">小明</div>  <div key="123">小明</div>
<div key="124">小红</div>  <div key="124">小红</div>
<div key="125">小花</div>  <div key="125">小花</div>

可以看出，原有的三项都不变，只是新增了小林这个人，这才是最理想的结果
```

用`index`和用`随机数`都是同理，`随机数`每次都在变，做不到专一性，很`渣男`，也很消耗性能，所以，拒绝`渣男`，选择`老实人`



##   25、说说nextTick的用处

举个例子，在Vue中：

```js
this.name = '林三心'
this.age = 18
this.gender = '男'
```

我们修改了三个变量，那问题来了，是每修改一次，DOM就更新一次吗？不是的，Vue采用的是`异步更新`的策略，通俗点说就是，`同一事件循环内`多次修改，会`统一`进行一次`视图更新`，这样才能节省性能嘛

```js
<div ref="testDiv">{{name}}</div>

name: '小林'

this.name = '林三心'
console.log(this.$refs.testDiv.innerHTML) // 这里是啥呢
```

答案是“小林”，前面说了，Vue是`异步更新`，所以数据一更新，视图却还没更新，所以拿到的还是上一次的旧视图数据，那么想要拿到最新视图数据怎么办呢？

```js
this.name = '林三心'
this.$nextTick(() => {
    console.log(this.$refs.testDiv.innerHTML) // 林三心
})
```



## 26、Vue的SSR是什么？有什么好处？

- SSR就是服务端渲染
- 基于nodejs server服务环境开发，所有html代码在服务端渲染
- 数据返回给前端，然后前端进行“激活”，即可称为浏览器识别的html代码
- SSR首次加载更快，有更好的用户体验，有更好的SEO优化，因为爬虫能看到整个页面的内容，如果是Vue项目，由于数据还要经过解析，这就造成爬虫并不会等待你的数据加载完成，所以Vue项目的SEO体验并不是很好。



## 27、Vue响应式是怎么实现的

整体思路就是数据劫持+观察者模式

对象内部通过defineReactive方法，使用Object.defineProperty将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组的方法来实现。当页面使用对应属性时，每个属性都拥有自己的dep属性，存放他所依赖的watcher（依赖收集），当属性变化后会通知自己对应的watcher去更新（派发更新）。

相关源码

```js
const { arrayMethods } = require('./array')

class Observer {
    constructor(value) {
        Object.defineProperty(value, '__ob__', {
            value: this,
            enumerable: false,
            writable: true,
            configurable: true
        })
        if(Array.isArray(value)) {
            value.__proto__ = arrayMethods
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk(data) {
        let keys = Object.keys(data)
        for(let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const value = data[key]
            defineReactive(data, key, value)
        }
    }

    observeArray(items) {
        for(let i = 0; i < items.length; i++) {
            observe(items[i])
        }
    }
}

function defineReactive(data, key, value) {
    const childOb = observe(value)

    const dep = new Dep()

    Object.defineProperty(data, key, {
        get() {
            console.log('获取值')
            if (Dep.target) {
                dep.depend()

                if (childOb) {
                    childOb.dep.depend()

                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set(newVal) {
            if (newVal === value) return
            observe(newVal)
            value = newVal
            dep.notify()
        }
    })
}

function observe(value) {
    if (Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value)) {
        return new Observer(value)
    }
}

function dependArray(value) {
    for(let e, i = 0, l = value.length; i < l; i++) {
        e = value[i]

        e && e.__ob__ && e.__ob__.dep.depend()

        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}

// array.js
const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'reverse',
    'sort'
]

methodsToPatch.forEach(method => {
    arrayMethods[method] = function (...args) {
        const result = arrayProto[method].apply(this, args)

        const ob = this.__ob__

        var inserted

        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                inserted = args.slice(2)
            default:
                break;
        }

        if (inserted) ob.observeArray(inserted)

        ob.dep.notify()

        return result
    }
})
```



## 28、为什么只对对象劫持，而要对数组进行方法重写？

因为对象最多也就几十个属性，拦截起来数量不多但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案。



## 29、Vue模板编译原理



## 30、Vue的computed和watch的原理



## 31、Vue.set方法原理

```js
function set(target, key, val) {
    // 判断是否是数组
    if (Array.isArray(target)) {
        // 判断谁大谁小
        target.length = Math.max(target.length, key)
        // 执行splice
        target.splice(key, 1, val)
        return val
    }

    const ob = target.__ob__

    // 如果此对象没有不是响应式对象，直接设置并返回
    if (key in target && !(key in target.prototype) || !ob) {
        target[key] = val
        return val
    }

    // 否则，新增属性，并响应式处理
    defineReactive(target, key, val)
    return val
}
```



## 32、Vue.delete方法的原理

```js
function del (target, key) {
    // 判断是否为数组
    if (Array.isArray(target)) {
        // 执行splice
        target.splice(key, 1)
        return
    }

    const ob = target.__ob__

    // 对象本身就没有这个属性，直接返回
    if (!(key in target)) return


    // 否则，删除这个属性
    delete target[key]

    // 判断是否是响应式对象，不是的话，直接返回
    if (!ob) return
    // 是的话，删除后要通知视图更新
    ob.dep.notify()
}
```



## 33、nextTick的原理

```js
let callbacks = []; //回调函数
let pending = false;
function flushCallbacks() {
  pending = false; //把标志还原为false
  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}
let timerFunc; //先采用微任务并按照优先级优雅降级的方式实现异步刷新
if (typeof Promise !== "undefined") {
  // 如果支持promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== "undefined") {
  // MutationObserver 主要是监听dom变化 也是一个异步方法
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== "undefined") {
  // 如果前面都不支持 判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 最后降级采用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    timerFunc();
  }
}
```



## 34、列表循环中key有什么作用？说说diff算法？



## 35、如果子组件改变props里的数据会发生什么？

- 改变的是基本类型，则会报错

- 改变的是引用类型

  ```js
  props: {
      item: {
        default: () => {}
      }
    }
  
  created() {
      // 不报错，并且父级数据会跟着变
      this.item.name = 'sanxin'
      
      // 会报错，跟基础类型报错一样
      this.item = 'sss'
    }
  ```



## 36、props怎么自定义验证？

举个例子

```js
props: {
    num: {
      default: 1,
      validator: function (value) {
          // 返回值为true则验证不通过，报错
          return [
            1, 2, 3, 4, 5
          ].indexOf(value) !== -1
    }
    }
  }
```



## 37、watch的immediate属性有什么用？

比如平时created时要请求一次数据，并且当搜索值改变，也要请求数据，我们会这么写

```js
created(){
  this.getList()
},
watch: {
  searchInputValue(){
    this.getList()
  }
}
```

使用immediate完全可以这么写，当它为true时，会初始执行一次

```js
watch: {
  searchInputValue:{
    handler: 'getList',
    immediate: true
  }
}
```



## 38、watch监听一个对象时，如何排除某些属性的监听

下面代码是params发生改变就重新请求数据，无论是a,b,c,d属性改变

```js
data() {
  return {
    params: {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  }
},
watch: {
  params: {
    deep: true,
      handler() {
      this.getList
    }
  }
}
```

但是如果我只想要a,b改变时重新请求，c,d改变时不重新请求？

```js
mounted() {
    Object.keys(this.params)
      .filter((_) => !['c', 'd'].includes(_)) // 排除对c，d属性的监听
      .forEach((_) => {
        this.$watch((vm) => vm.params[_], handler, {
          deep: true,
        })
      })
  },
data() {
  return {
    params: {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  }
},
watch: {
  params: {
    deep: true,
      handler() {
      this.getList
    }
  }
}
```



## 39、审查元素时发现data-v-xxx，这是什么？

这是在标记vue文件中的css时使用scoped标记产生的，因为要保证文件中的css不互相影响，给每个component都做了唯一的标记，所以每引入一个component就会出现一个新的 data-v-xxx 标记



## 40、computed如何实现传参？

> 使用闭包

```html
<!-- html-->
<div>{{ total(3) }}</div>
```

```js
// js
computed: {
  total() {
    return function(n) {
      return n*this.num
    }
  }
}
```



## 41、Vue的hook的使用

- 同一组件使用

> 这是我们常用的使用定时器的方法

```js
export default {
  data() {
    timer:null  
  },
  mounted() {
      this.timer = setInterval(() => {
      // 具体执行内容
      console.log('1')
    }, 1000)
  }
  beforeDestory() {
    clearInterval(this.timer)
    this.timer = null
  }
}
```

> 上面的做法不好的地方在于：使得全局多了一个timer变量，可以使用hook可以这么做：

```js
export default {
  methods: {
    fn() {
      const timer = setInterval(() => {
        // 具体执行代码
        console.log(123)
      })
      
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
        timer = null
      })
    }
  }
}
```



- 父子组件使用

> 如果子组件需要在mounted时触发父组件的某一个函数，平时都会这么写：

```vue
// 父组件
<template>
	<child @childMounted="childMountedHandler"></child>
</template>

<script>
	export default {
    methods() {
      childMountedHandler() {
        // do something
      }
    }
  }
</script>
```

```js
// 子组件
export default {
  mounted() {
    this.$emit('childMounted', '饮茶先啦！')
  }
}
```

> 使用hook的话可以更加方便

```vue
// 父组件
<template>
	<child @hook:mounted="childMountedHandler"></child>
</template>

<script>
	export default {
    methods() {
      childMountedHandler() {
        // do something
      }
    }
  }
</script>
```



## 42、provide和inject是响应式的吗？

```js
// 祖先组件
export default {
  provide() {
    return {
      // keyName: { name: this.name }, // value是对象才能实现响应式，也就是引用类型
      keyName: 'test', // value如果是基本类型，无法实现响应式
      keyName: this.changeValue // 通过函数的方式也可以，注意是把函数当做value，而不是this.changeValue()
    }
  },
  data() {
    return {
      name: '张三'
    }
  },
  methods() {
    changeValue() {
      this.name = '改变后的名字-李四'
    }
  }
}



// 后代组件
export default {
 inject: ['keyName'],
  created() {
    console.log(this.keyName) // 改变后的名字-李四
  }
}
```

一句话总结，就是provide提供的数据，使用函数或者对象（引用类型）才能实现响应式，使用基本类型的不可以响应式。





## 43、Vue的el和$mount优先级？

> 当el和$mount同时存在时，el优先级 > $mount



## 44、动态指令和参数用过吗？

```vue
<template>
    ...
    <aButton @[someEvent]="handleSomeEvent()" :[someProps]="1000" />...
</template>
<script>
  ...
  data(){
    return{
      ...
      someEvent: someCondition ? "click" : "dbclick",
      someProps: someCondition ? "num" : "price"
    }
  },
  methods: {
    handleSomeEvent(){
      // handle some event
    }
  }  
</script>
```



## 45、相同的路由组件如何重新渲染？

> 开发人员经常遇到的情况是，多个路由解析为同一个Vue组件。问题是，Vue出于性能原因，默认情况下共享组件将不会重新渲染，如果你尝试在使用相同组件的路由之间进行切换，则不会发生任何变化。

```js
const routes = [
  {
    path: "/a",
    component: MyComponent
  },
  {
    path: "/b",
    component: MyComponent
  }
]
```

> 如果依然想要重新渲染，可以使用 key

```vue
<template>
    <router-view :key="$route.path"></router-view>
</template>
```





## 46、自定义v-model

默认情况下，v-model是@input事件侦听器和:value属性上的语法糖。但是可以在Vue组件中指定一个模型属性来定义使用什么事件和value属性。

```js
export default {
  model: {
    event: 'change',
    prop: 'checked'
  }
}
```



## 47、如何获取data中某一个数据的初始状态？

可以通过 `this.$options.data().xxx`来获取初始值

举个例子

```js
export default {
  data() {
    return {
      num: 10
    }
  },
  mounted() {
    this.num = 1000
  },
  methods: {
    howMuch() {
      // 计算出num增加了多少，那就是1000 - 初始值
      // 可以通过this.$options.data().xxx来获取初始值
      console.log(1000 - this.$options.data().num)
    }
  }
}
```



## 48、为什么不建议v-for和v-if同时存在？

举个例子

```vue
<div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
    {{item}}
</div>
```

上面的写法是v-for和v-if同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题：

```vue
<template>
	<div v-for="item in list">
    {{item}}
	</div>
</template>

<script>
export default {
  computed() {
    list() {
      return [1, 2, 3, 4, 5, 6, 7].filter(item => item !== 3)
    }
  }
}
</script>
```



## 49、计算变量时，methods和computed哪个好？

```vue
<template>
  <div>
    <div>{{howMuch1()}}</div>
    <div>{{howMuch2()}}</div>
    <div>{{index}}</div>
  </div>
</template>

<script>
export default {
  data: () {
    return {
  		index: 0
		}
  },
	methods: {
    howMuch1() {
      return this.num + this.price
    }
  },
	computed() {
    howMuch2() {
      return this.num + this.price
    }
  }
}
</script>
```

`computed`会好一些，因为computed会有`缓存`。例如index由0变成1，那么会触发视图更新，这时候methods会重新执行一次，而computed不会，因为computed依赖的两个变量num和price都没变。



## 50、Vue的作者是谁？

> 请立刻阅读我们的文档.jpg

尤雨溪
