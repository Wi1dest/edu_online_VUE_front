import request from '@/utils/request'

export default {
    registerMember(member) {
      return request({
        url: '/ucenterservice/member/register',
        method: 'post',
        data: member
      })
    },
    getCode(phone) {
        return request({
          url: '/smsservice/sms/getPhoneCode/' + phone,
          method: 'get'
        })
      }
}