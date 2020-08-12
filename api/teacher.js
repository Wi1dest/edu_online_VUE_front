import request from '@/utils/request'

export default {
    getTeacherPage(page,limit) {
      return request({
        url: `/eduservice/teacher/getTeacherPage/${page}/${limit}`,
        method: 'get'
      })
    },
    getTeacherInfo(id) {
        return request({
          url: "/eduservice/teacher/getTeacherInfo/"+id,
          method: 'get'
        })
      }
}