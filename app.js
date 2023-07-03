const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`listo men`);
});

app.listen(PORT, () => {
  console.log(`server listen in PORT => ${PORT}`);
});
