import request from '@/utils/request'


export default {
    saveComment(comment) {
        return request({
            url: "/eduservice/comment/saveComment",
            method: 'post',
            data : comment
        })
    },
    getCommentList(courseId,page,limit){
        return request({
            url: `/eduservice/comment/getCommentList/${courseId}/${page}/${limit}`,
            method: 'get'
        })
    },
    updateComment(comment) {
        return request({
            url: "/eduservice/comment/updateComment",
            method: 'put',
            data : comment
        })
    },
    deleteComment(commentId) {
        return request({
            url: "/eduservice/comment/deleteComment/" + commentId,
            method: 'delete'
        })
    },
}