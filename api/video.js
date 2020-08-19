import request from '@/utils/request'


export default {
    getVideoPlayAuth(videoId) {
        return request({
            url: "/vodservice/video/get-play-auth/" + videoId,
            method: 'get'
        })
    },
    checkUserCanWatchVdieo(videoId){
        return request({
            url: "/eduservice/course/checkUserCanWatchVdieo/" + videoId,
            method: 'get'
        })
    }
}