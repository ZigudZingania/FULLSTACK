import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [Pname, setPname] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(1);
  const [render, setRender] = useState(false);

  // FOR DEVELOPMENT PURPOSE

  // useEffect(() => {
  //   axios
  //     .get("/api/data")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [render]);

  // async function submit(event) {
  //   event.preventDefault();
  //   try {
  //     await axios
  //       .post(
  //         "/add",
  //         { id: id, p_name: Pname || "Zaffa", age: Number(age) || 69 }
  //         // Guess you don't need these lines of code.
  //         // , {
  //         //   withCredentials: true,
  //         //   credentials: 'include',
  //         // }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setRender(!render);
  //   setPname("");
  //   setAge("");
  //   setId(id + 1);
  // }


  // FOR DEPLOYMENT PURPOSE
  
  useEffect(() => {
    axios
      .get("https://fullstack-server-flame.vercel.app/api/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  async function submit(event) {
    event.preventDefault();
    try {
      await axios
        .post(
          "https://fullstack-server-flame.vercel.app/add",
          { id: id, p_name: Pname || "Zaffa", age: Number(age) || 69 }
          // Guess you don't need these lines of code.
          // , {
          //   withCredentials: true,
          //   credentials: 'include',
          // }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    setRender(!render);
    setPname("");
    setAge("");
    setId(id + 1);
  }

  return (
    <>
      <form method="post" onSubmit={submit}>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setPname(e.target.value);
          }}
          value={Pname}
          placeholder="Type name here..."
        ></input>
        <input
          type="text"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          placeholder="Type age here..."
        ></input>
        <input type="submit" value="submit"></input>
      </form>
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
