const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js on Azure with GitHub Actions íº€");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
