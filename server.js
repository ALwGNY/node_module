const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
app.get("/coucou", (req, res) => {
    res.status(200).send("Hé, je suis ta nouvelle API et je t'aime 👋")  
  });

app.listen(port, () => {
console.log(`Listening to requests on http://localhost:${port}`);
});

// blablabla
const generate = require('./generate.js')
// we just imported our function. From now on, we'll be able to call it in our file!
// blablabla
generate() // will console.log "prénom généré"
// blablabla