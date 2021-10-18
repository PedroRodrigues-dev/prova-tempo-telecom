// Modules
const express = require("express");
const app = express();

// Others
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running in " + PORT);
});
