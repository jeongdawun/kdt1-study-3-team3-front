<template lang="">
    <div>
        <p><v-btn @click="checkAuth">대출 가능한지 확인하기</v-btn></p>
        <p><v-btn @click="onSubmit">대출 금액 확인하기</v-btn></p>
        <p>수입: <input type="number" v-model="income"></p>
        <p>사채: <input type="number" v-model="private_loan_outstanding_amount"></p>
        <p>빚: <input type="number" v-model="outstanding_amount"></p>
        <p>
            입력한 값: 
            {{ income }} |
            {{ private_loan_outstanding_amount }} |
            {{ outstanding_amount }}
        </p>
        <p>대출 금액은 ? {{ receivedData }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

const loanModule = 'loanModule'

export default {
    data(){
        return {
            receivedData: 0,
            userToken: '',
            accountId: 0,
            income: 0,
            private_loan_outstanding_amount: 0,
            outstanding_amount: 0,
        }
    },
    methods: {
        ...mapActions(loanModule, ['requestLoanAmount', 'requestUserInfoCheck']),
        async checkAuth() {
            const userToken = this.userToken
            this.accountId = await this.requestUserInfoCheck({ userToken })
        },
        async onSubmit () {
            const { income, private_loan_outstanding_amount, outstanding_amount } = this
            this.receivedData = await this.requestLoanAmount({ income, private_loan_outstanding_amount, outstanding_amount })
        }
    },
    async created() {
        this.userToken = await localStorage.getItem("userToken")
    }
}
</script>

<style lang="">
    
</style>