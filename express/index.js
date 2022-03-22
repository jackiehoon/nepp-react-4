const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "hello world",
  });
});

app.listen(port, () => {
  console.log("서버가 작동합니다.");
});
