import { delete_product_saga, get_product_saga, post_product_saga, put_product_saga } from "./root/rootProductSaga";
import { all } from "@redux-saga/core/effects";


export function* rootSaga() {
    yield all([get_product_saga(),post_product_saga(),delete_product_saga(),put_product_saga()])
}