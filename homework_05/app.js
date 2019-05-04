const express = require('express');
const axios = require("axios");
var app = express();
const port =3000;
const proxyUri = "https://randomuser.me/api/?results=10";
app.listen(port, () => console.log("listening on "+port));
app.enable('trust proxy');
app.enable('strict routing');
app.enable('case sensetive routing');
app.disable('x-powered-by');
app.set({
    "Cache-control": "private, max-age = 86400",
    "Last-modifier": new Date(),
    "Link": `<{proxyUri}&page=1>; rel = "first",
        <{proxyUri}&page=2>; rel = "next"`
});
app.route('/users')
    .get(async (req, res) => {
    console.log(`processing...`)
    try {
        let result = await axios.get(proxyUri);
        console.log(result.data);
        res.json(result.data);
    } catch {
        res.send("error");
    }
});
