// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/border.css'
import './assets/style/reset .css'
import fastClick from "fastClick";
import 'lib-flexible/flexible.js'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import wechatAuth from './plugins/wechatAuth' //微信登陆插件
import api from './utils/api'
import components from './components'
import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Tab,
  Tabs
} from 'vant';
Vue.use(api)
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs);
Vue.use(VueLazyLoad)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(components);
Vue.config.productionTip = false
fastClick.attach(document.body)
/* router.beforeEach((to, from, next) => {

  if (!store.state.auth.userInfo.nick_name && !store.state.auth.userInfo.id) {

    let loginUrl = 'http://192.168.31.85'
    wechatAuth.redirect_uri = loginUrl

    if (store.state.auth.loginStatus == 0) {

      if (store.state.auth.scopeModel == 0) {
        wechatAuth.setScope(0)
      } else {
        wechatAuth.setScope(1)
      }

      //微信未授权登录跳转到授权登录页面

      window.location.href = wechatAuth.authUrl
      store.dispatch('auth/setLoginStatus', 1)


    } else if (store.state.auth.loginStatus == 1) {


      try {
        let href = window.location.href

        wechatAuth.returnFromWechat(href.replace(/(#.*)$/g, ''))

      } catch (err) {
        store.dispatch('auth/setLoginStatus', 0)
        next()
      }
      var data = {
        code: wechatAuth.code,
        url: store.state.auth.scopeModel == 0 ? 'oauthtestpart1' : 'oauthtestpart2'
      }



      store.dispatch('auth/loginWechatAuth', data).then((res) => {
        store.dispatch('auth/setLoginStatus', 0)

        if (res.code == 1) {
          store.dispatch('auth/setScopeModel', 0)

        } else if (res.code == 3) {
          store.dispatch('auth/setScopeModel', 1)

        } else {
          store.dispatch('auth/setScopeModel', 0)

          console.log('保存用户信息失败')
        }
        next()
      }).catch((err) => {
        console.log('请求错误')
        next()
      })
    }


  } else {

    next()
  }


}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
