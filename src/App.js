import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const styles = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
  };

  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users?fbclid=IwAR2UcAYoDxsK0ZVnLXKfH6HtAk3WyB8KNuw9jfwWC6lAiAy1iHosZSgaeOc"
    )
      .then((results) => results.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);

  function deleteRow(id) {
    console.log("id", 5);

    const newTableData = tableData.filter((list) => {
      return list.id !== id;
    });

    setTableData(newTableData);
  }
  console.log("tableData");

  return (
    <div className="App">
      <h1> Name list </h1>
      <table
        style={{
          width: "50%",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "black",
          marginTop: "1rem",
          marginLeft: "2rem",
        }}
      >
        <tr>
          <th style={styles}>Id</th>
          <th style={styles}>Name</th>
          <th style={styles}>Email</th>
          <th style={styles}>Action</th>
        </tr>
        {tableData &&
          tableData.map((list) => {
            return (
              <tr key={list.id}>
                <th style={styles}>{list.id}</th>
                <th style={styles}>{list.name}</th>
                <th style={styles}>{list.email}</th>
                <th style={styles}>
                  <button style={styles} onClick={() => deleteRow(list.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default App;
