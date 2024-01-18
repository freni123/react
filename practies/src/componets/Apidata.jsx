import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Apidata() {
  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({});

  const title = useRef();
  const author = useRef();
  /* --------------------------------- getdata -------------------------------- */
  const getData = () => {
    axios.get("  http://localhost:3001/posts").then((res) => {
      setdata(res.data || []);
    });
  };
  const handleSubmit = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };
    console.log(data);
    /* -------------------------------- add data -------------------------------- */
    axios.post(" http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);
    });
  };
  /* ------------------------------- delete data ------------------------------ */
  const deleteData = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(id);
      setdata(
        data.filter((e) => {
          return e.id !== id;
        })
      );
    });
  };
  /* ------------------------------- update data ------------------------------ */
  const handleUpdate = (id, ind) => {
    const updatedData = [...data];
    const final = updatedData[ind];
    setupdate(final);
    console.log(final);
  };
  
  const finalUpdate = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  };
  const final = () => {
    console.log(update, "update");

    axios
      .put(`http://localhost:3001/posts/${update.id}`, update)
      .then((res) => {
        console.log(res.data, "update res");
        const dataUpdate = [...data];
        console.log(dataUpdate);

        const index = dataUpdate.findIndex((item) => item.id === update.id);
        dataUpdate[index] = res.data;
        setdata(dataUpdate);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <input type="text" name="title" ref={title} />
      <input type="text" name="author" ref={author} />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <br />
      <input
        type="text"
        name="title"
        value={update.title}
        onChange={finalUpdate}
      />
      <input
        type="text"
        name="author"
        value={update.author}
        onChange={finalUpdate}
      />
      <button onClick={final}>update</button>

      {data?.map((val, ind) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{val.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{val.author}</h6>
              <button onClick={() => deleteData(val.id)}>Delete</button>
              <button onClick={() => handleUpdate(val.id, ind)}>update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Apidata;
