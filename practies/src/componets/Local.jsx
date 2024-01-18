import React, { useEffect, useRef, useState } from "react";

function Local() {
  const fname = useRef();
  const lname = useRef();

  const [result, setresult] = useState();
  const [view, setview] = useState({});
  const [index, setindex] = useState();

  const arr = JSON.parse(localStorage.getItem("data")) || [];

  /* -------------------------------- save data ------------------------------- */
  const handeleSave = () => {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
    };
    console.log(data);
    arr.push(data);
    localStorage.setItem("data", JSON.stringify(arr));
    setresult(arr);
  };
  /* ------------------------------- delete data ------------------------------ */
  const handelDelete = (index) => {
    console.log(index);

    arr.splice(index, 1);
    console.log(arr);
    localStorage.setItem("data", JSON.stringify(arr));
    setresult(arr);
  };
  /* ------------------------------- data update ------------------------------ */
  const handelView = (val, ind) => {
    setview(val);
    setindex(ind);
  };

  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };
  const handleUpdate = () => {
    arr.splice(index, 1, view);
    localStorage.setItem("data", JSON.stringify(arr));
    setresult([...arr]);
  };
  useEffect(() => {
    setresult([...arr]);
  }, []);
  return (
    <div>
      <input type="text" name="fname" ref={fname}></input>
      <input type="text" name="lname" ref={lname}></input>
      <button onClick={handeleSave}>Save</button>
      <input
        type="text"
        name="fname"
        value={view.fname}
        onChange={(e) => handle(e)}
      ></input>
      <input
        type="text"
        name="lname"
        value={view.lname}
        onChange={(e) => handle(e)}
      ></input>
      <button onClick={handleUpdate}>update</button>
      {result?.map((val, ind) => {
        return (
          <>
            <h1>{val.fname}</h1>
            <h2>{val.lname}</h2>
            <button onClick={() => handelDelete(ind)}>delete</button>
            <button onClick={() => handelView(val, ind)}>view</button>
          </>
        );
      })}
    </div>
  );
}

export default Local;
