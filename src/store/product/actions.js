import {
  REQUEST_PRODUCT_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
  requestProductToSpring({ commit }, id) {
    return axiosInst
      .get(`/product/${id}`)
      .then((resRead) => {
        console.log("상품 잘 가져오는지 확인: " + JSON.stringify(resRead.data));
        commit(REQUEST_PRODUCT_TO_SPRING, resRead.data);
      })
      .catch(() => {
        alert("상품이 존재하지 않습니다.");
      });
  },
  requestProductListToSpring({ commit }) {
    return axiosInst.post("/product/list").then((resList) => {
      //get으로 받아온 res.data를  REQUEST_BOARD_LIST_TO_SPRING사용
      //REQUEST_BOARD_LIST_TO_SPRING는 받아온 데이터를 state의 boards에 넣어줌
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, resList.data);
    });
  },
  requestProductRegisterToSpring({ }, payload) {
    return axiosInst.post("/product/register", payload)
      .then((resRegister) => {
        if (resRegister.data) {
          return resRegister.data;
        } else {
          alert("상품 등록 불가!");
        }
      });
  },
  requestDeleteProductToSpring({ }, id) {
    return axiosInst
      .delete(`/product/${id}`)
      .then((resDelete) => {
        alert("상품이 삭제되었습니다.");
      })
      .catch(() => {
        alert("상품삭제 실패");
      });
  },
  requestModifyProductToSpring({ }, payload) {
    const { productName, productPrice, productInfo, id } = payload;
    return axiosInst
      .put(`/product/${id}`, { productName, productPrice, productInfo, id })
      .then((resModify) => {
        alert("상품이 수정되었습니다.");
      })
      .catch(() => {
        alert("상품수정 실패");
      });
  },
  requestBusinessProductListToSpring({ }, payload) {
    return axiosInst.post("/product/business-product-list", payload)
      .then((resList) => {
        return resList.data;
      })
      .catch(() => {
        alert("안 보여줌")
      })
  }
};