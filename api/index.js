import request from '@/utils/request'

export default {
    getIndexInfo(){
        return request({
            url: '/eduservice/index/index',
            method: 'get'
        })
    },

}