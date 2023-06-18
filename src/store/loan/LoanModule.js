import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/loan/actions.js"

Vue.use(Vuex)

const LoanModule = {
    namespaced: true,
    actions,
}

export default LoanModule