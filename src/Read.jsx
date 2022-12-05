import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Read() {
  const navigate = useNavigate();
  const [Dataa, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  //using get method to fetch data from json server
  async function getData() {
    try {
      const Dataa = await axios.get(
        "https:....."
      );
      setData(Dataa.data);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //   the following function for delete data through APIs
  async function handleDelete(id) {
    await axios
      .delete(`https://635ca76cf0bc26795b025f62.mockapi.io/Instagram/${id}`)
      .then(() => {
        getData();
      });
  }
  return (
    <div className="container customTable">
      <div className="row">
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Data</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Dataa && Dataa.length > 0 ? (
                Dataa.map((items, i) => (
                  <tr key={items.id}>
                    <th scope="row">{items.id}</th>
                    <td>
                      {items.email} <br /> {items.pswd}
                    </td>
                    {/* <td></td> */}
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDelete(items.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No Data founded</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
