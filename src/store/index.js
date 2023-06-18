import Vue from 'vue'
import Vuex from 'vuex'

import accountModule from '@/store/account/AccountModule'
import productModule from '@/store/product/productModule'
import loanModule from '@/store/loan/LoanModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule: accountModule,
    productModule: productModule,
    loanModule: loanModule
  },
})

export default store