import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/data", (req, res) => {
  const data = [
    { id: 1, person_name: "Rohan", age: 22 },
    { id: 2, person_name: "Goku", age: 45 },
  ];

  res.send(data);
});

app.listen(PORT, () => {
  console.log("Server listening at rohan's port: ", PORT);
});
