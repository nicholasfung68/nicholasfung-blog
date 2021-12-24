# Vue路由解耦

> 在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

所谓路由解耦，就是接收路由传过来的参数，没必要像通过  `this.aaa =  this.$route.query.aaa` 这样繁琐，而是可以通过props接收路由传过来的参数。



## 1、通过路由query传参

> 通过函数模式来返回 `props`,  接收query传过来的参数。

```js
// 配置路由文件
const router = new VueRouter({
  routes: [
    {
      path: '/music',
      name: 'Music',
      component: () => import('../views/music.vue'),
      props: route => ({
      	singer: route.query.singer
      })
    },
    {
      path: '/singer',
      name: 'Singer',
      component: () => import('../views/singer.vue')
    }
  ]
})
```

```js
// singer.vue
export default {
  methods: {
    gotoMusicPage() {
      this.$router.push({
        path: '/music',
        name: 'Music',
        query: {
          singer: 'Nicholas Teo'
        }
      })
    }
  }
}
```

```js
// music.vue
export default {
  props: ['singer'],
  created() {
    console.log(this.singer) // Nicholas Teo
  }
}
```





## 2、通过路由params传参

> 将路由的 `props` 属性设置为 `true` 后，组件内可通过 `props` 接收到 `params` 参数

```js
// 配置路由文件
const router = new VueRouter({
  routes: [
    {
      path: '/music/:singer',
      name: 'Music',
      component: () => import('../views/music.vue'),
      props: true
    },
    {
      path: '/singer',
      name: 'Singer',
      component: () => import('../views/singer.vue')
    }
  ]
})
```

```js
// singer.vue
export default {
  methods: {
    gotoMusicPage() {
      this.$router.push({
        path: '/music',
        name: 'Music',
        params: {
          singer: '张栋梁'
        }
      })
    }
  }
}
```

```js
// music.vue
export default {
  props: ['singer'],
  created() {
    console.log(this.singer) // 张栋梁
  }
}
```
