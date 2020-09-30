const express = require("express");
const Vigenere = require("caesar-salad").Vigenere;
const app = express();
const port = 8000;

const password = "My name is Sultan.";

app.get("/decode/:text", (req, res) => {
  res.send(`${Vigenere.Cipher("password").crypt(req.params.text)}`);
});

app.listen(port, () => {
  console.log(`We are live on${port}`);
});
