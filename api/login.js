import request from '@/utils/request'

export default {
  login(member) {
    return request({
      url: '/ucenterservice/member/login',
      method: 'post',
      data: member
    })
  },
  getMemberInfo() {
    return request({
      url: '/ucenterservice/member/auth/getMemberInfo',
      method: 'get'
    })
  }
}