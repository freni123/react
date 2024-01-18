import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PROGRSS,
  POST_PRODUCT_PROGRSS,
  PUT_PRODUCT_PROGRSS,
} from "../redux-saga/admin/action/action";

const Data = () => {
  const name = useRef();
  const price = useRef();
  const product = useSelector((state) => state.productReducer);
  const [view, setview] = useState({});

  const dispatch = useDispatch();

  const handalSubmit = () => {
    const data = {
      productName: name.current.value,
      price: price.current.value,
    };
    dispatch({
      type: POST_PRODUCT_PROGRSS,
      payload: data,
    });
  };

  const handalDelete = (val) => {
    dispatch({
      type: DELETE_PRODUCT_PROGRSS,
      payload: val,
    });
  };

  const handal = (e) => {
    setview((view) => ({
      ...view,
      [e.target.name]: e.target.value,
    }));
  };

  const handalUpdate = () => {
    dispatch({ type: PUT_PRODUCT_PROGRSS, payload: view });
  };

  return (
    <div className="container">
      <input type="text" ref={name}></input>
      <input type="text" ref={price}></input>
      <button onClick={handalSubmit}>Submit</button>

      <input
        type="text"
        name="productName"
        value={view.productName}
        onChange={handal}
      ></input>
      <input
        type="text"
        name="price"
        value={view.price}
        onChange={handal}
      ></input>
      <button onClick={handalUpdate}>Update</button>

      <div className="row">
        {product.product?.map((val, ind) => {
          return (
            <div className="col-4" key={ind}>
              <div class="card mt-5" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{val.productName}</h5>
                  <p class="card-text">{val.price}</p>
                  <button onClick={() => handalDelete(val)}>Delete</button>
                  <button onClick={() => setview(val)}>View</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
