import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const data = [
  // { id: 1, person_name: "Rohan", age: 22 },
  // { id: 2, person_name: "Goku", age: 45 },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/add", async (req, res) => {
  const msg = await req.body;
  console.log(msg);
  data.push({ id: msg.id, person_name: msg.p_name, age: msg.age });
  res.send("data added success");
});

app.listen(PORT, () => {
  console.log("Server listening at rohan's port: ", PORT);
});
