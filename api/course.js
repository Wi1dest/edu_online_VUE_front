import request from '@/utils/request'

export default {
    getCoursePage(page,limit,courseFrontDTO) {
      return request({
        url: `/eduservice/course/getCoursePage/${page}/${limit}`,
        method: 'post',
        data: courseFrontDTO
      })
    },
    getAllSubjectList() {
        return request({
          url: "/eduservice/subject/getSubjectList",
          method: 'get'
        })
      }
}