import axiosInst from '@/utility/axiosInst';
import axios from 'axios';
import router from '@/router'

export default {
    requestLoanAmount ({ }, payload) {
        return axios.post('http://localhost:8000/request-loan-amount', payload)
            .then((res) => {
                return res.data
            })
            .catch(() => {
                alert("파이썬에 문제발생!")
            })
    },
    requestUserInfoCheck ({ }, payload) {
        return axiosInst.post('/account/get-user-accountId', payload)
            .then((res) => {
                if(res.data == 0) {
                    alert("사용자 인증이 필요합니다.")
                    router.push('/account-login')
                } else {
                    alert("사용자 인증이 완료되었습니다.")
                }
            })
            .catch(() => {
                alert("스프링에 문제발생!")
            })
    },
}