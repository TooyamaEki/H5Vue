import {
  loadLoginStatus,
  saveLoginStatus,
  loadUserInfo,
  saveUserInfo,
  removeUserInfo,
  loadScopeModel,
  saveScopeModel,
  removeScopeModel,

} from '@/utils/cache'
import * as types from './mutationTypes'
import {
  loginByCode
} from '@/utils/request'
import {
  oauthtestpart1,
  oauthtestpart2
}
from '@/utils/url'

const state = {
  loginStatus: loadLoginStatus(), //登录状态
  scopeModel: loadScopeModel(), //授权模式
  userInfo: loadUserInfo(), //用户登录信息
}
const mutations = {
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_LOGIN_STATUS](state, loginStatus) {
    state.loginStatus = loginStatus
  },
  [types.SET_SCOPE_MODEL](state, scopeModel) {
    state.scopeModel = scopeModel
  },
}

// 异步操作
const actions = {
  loginWechatAuth({
    commit,
    state
  }, query) {
    let data = {
      code: query.code,
    }

    return new Promise(((resolve, reject) => {

      loginByCode(query.url == 'oauthtestpart1' ? oauthtestpart1 : oauthtestpart2, data).then(res => {

        if (res.code == 1) {
          console.log(saveUserInfo(res.obj.obj))
          console.log('保存成功')
          commit(types.SET_USERINFO, saveUserInfo(res.obj.obj))
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    }))
  },
  setLoginStatus({
    commit,
  }, query) {

    commit(types.SET_LOGIN_STATUS, saveLoginStatus(query))

  },
  setScopeModel({
    commit
  }, query) {
    commit(types.SET_SCOPE_MODEL, saveScopeModel(query))
  },


}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
