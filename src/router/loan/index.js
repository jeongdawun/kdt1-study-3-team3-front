import Vue from 'vue'
import VueRouter from 'vue-router'

import LoanPage from '@/views/loan/LoanPage.vue'

Vue.use(VueRouter)

const loanRoutes = [
  {
    path: '/loan',
    name: 'LoanPage',
    component: LoanPage
  },
]

export default loanRoutes