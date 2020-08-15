import request from '@/utils/request'

export default {
    createOrder(courseId) {
        return request({
            url: "/orderservice/order/createOrder/" + courseId,
            method: 'post'
        })
    },
    getOrderInfoByOrderNO(orderNO){
        return request({
            url: "/orderservice/order/getOrder/" + orderNO,
            method: 'get'
        })
    },
    createWeChatPayQRCode(orderNo) {
        return request({
            url: "/orderservice/log/createWeChatQRCode/" + orderNo,
            method: 'get'
        })
    },
    checkPayStatus(orderNo) {
        return request({
            url: "/orderservice/log/checkPayStatus/" + orderNo,
            method: 'get'
        })
    },
}