import axios from "axios";
import {
  BASE_URL,
  DELETE_PRODUCT_API,
  GET_PRODUCT_API,
  POST_PRODUCT_API,
  PUT_PRODUCT_API,
} from "../../constant";

// get api
export async function get_product() {
  return axios
    .get(BASE_URL + GET_PRODUCT_API)
    .then((res) => { 
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

// Post api
export async function post_product(action) {
  return axios
    .post(BASE_URL + POST_PRODUCT_API, action.payload)
    .then((res) => { 
      const data = res.data;
      const status = res.status;
      console.log(data, status, "data state");
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

// Delete api
export  function delete_product(action) {
  console.log(action.payload.id);
  return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.payload.id).then((res) => {
    const data = action.payload.id
    const status = res.status;
    return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
  });
}

// Post api
export async function put_product(action) { 
  return axios
    .put(BASE_URL + PUT_PRODUCT_API + action.payload.id, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

