import cookies from 'js-cookie'
import storage from 'good-storage'
const LoginStatusKey = 'Login-Status' //登录态 0 1 2
const UserInfoKey = 'User-Info' //用户信息 {} {...}
const ScopeModelKey = 'Scope-Model' //Scope-Model {} {...}

// 登陆状态操作
export function loadLoginStatus() {
  return cookies.get(LoginStatusKey) || 0
}

export function saveLoginStatus(status) {
  cookies.set(LoginStatusKey, status, {
    expires: 7
  })
  return status
}

export function removeLoginStatus() {
  cookies.remove(LoginStatusKey)
  return ''
}
// 授权模式操作
export function loadScopeModel() {
  return cookies.get(ScopeModelKey) || 0
}
export function saveScopeModel(ScopeModel) {
  cookies.set(ScopeModelKey, ScopeModel, {
    expires: 7
  })
  return ScopeModel
}
export function removeScopeModel() {
 cookies.remove(ScopeModelKey)
  return ''
}


//  用户信息操作
export function loadUserInfo() {
  return storage.get(UserInfoKey, {})
}

export function saveUserInfo(userInfo) {
  storage.set(UserInfoKey, userInfo)
  return userInfo
}

export function removeUserInfo() {
  storage.remove(UserInfoKey)
  return {}
}
