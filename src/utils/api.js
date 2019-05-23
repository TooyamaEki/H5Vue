
import qs from 'qs'
import axios from 'axios'
axios.defaults.headers.post["Conten-type"] = "application/json"
export default {
  install(Vue, options) {
    // 页码
    Vue.prototype.$pageSize = 15
    Vue.prototype.$PostUrl = require('./url')
    // 获取数据API
    Vue.prototype.$PostAPI = (url, params) => {
      return axios.post(url, qs.stringify(params))
        .then(Res => Res.data)
    }

  }
}
