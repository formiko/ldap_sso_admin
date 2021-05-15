import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: 'http://8.141.71.98',
    // url: '/vue-element-admin/user/login',
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    baseURL: 'http://8.141.71.98',
    // url: '/vue-element-admin/user/info',
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
