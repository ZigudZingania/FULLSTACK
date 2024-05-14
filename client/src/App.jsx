import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fullstack-backend-black.vercel.app/api/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>My first FULL_STACK web app!</h2>
      {data.map((data) => (
        <div key={data.id}>
          <h3>{data.person_name}</h3>
          <p>{data.age}</p>
        </div>
      ))}
      <p>Number of people in data: {data.length}</p>
    </>
  );
}

export default App;
