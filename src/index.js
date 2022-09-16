const express = require("express");
const  route_entity  = require("./routes/entity");
const app = express();

const port = process.env.port | 9000;

app.use(express.json());
app.listen(port, () =>
  console.log(`Servidor escuhando en el puerto: ${port}`)
);

app.use("/api", route_entity)

app.get("*", (req, res) => {
  res.send("Prueba SOYYO");
});

