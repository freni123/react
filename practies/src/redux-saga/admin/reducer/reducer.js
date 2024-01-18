import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PROGRSS,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PROGRESS,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  POST_PRODUCT_PROGRSS,
  POST_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
  PUT_PRODUCT_PROGRSS,
  PUT_PRODUCT_SUCCESS,
} from "../action/action";

const initialState = {
  product: [],
  isLoading: false,
  isError: null,
};

const productReducer = (state = { ...initialState }, action) => {
  console.log(action, "reducer");
  switch (action.type) {
    //get
    case GET_PRODUCT_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.data,
        isError: null,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    }

    //post
    case POST_PRODUCT_PROGRSS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: state.product.concat(action.data),
        isError: null,
      };
    }
    case POST_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    }

    //delete
    case DELETE_PRODUCT_PROGRSS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      const FilterDelete = state.product.filter(
        (val) => val.id !== action.data
      );
      console.log("hgyeghifgfh", FilterDelete);
      return {
        ...state,
        isLoading: false,
        product: FilterDelete,
        isError: null,
      };
    }
    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    }

    //Put
    case PUT_PRODUCT_PROGRSS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PUT_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: state.product.map((state) =>
          state.id === action.data.id ? action.data : state
        ),
        isError: null,
      };
    }
    case PUT_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default productReducer;
