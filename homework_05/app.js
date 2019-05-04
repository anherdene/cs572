const express = require('express');
const axios = require("axios");
var app = express();
const port =3000;

app.listen(port, () => console.log("listening on "+port));
app.enable('trust proxy');
app.enable('strict routing');
app.enable('case sensetive routing');
app.disable('x-powered-by');
app.route('/users')
    .get(async (req, res) => {
    console.log(`processing...`)
    try {
        let result = await axios.get("https://randomuser.me/api/?results=10");
        console.log(result.data);
        app.set({
            "Cache-control": "private, max-age = 86400",
            "Last-modifier": new Date(),
            "Link": `<https://randomuser.me/api/?results=10&page=1>; rel = "first",
        <https://randomuser.me/api/?results=10&page=2>; rel = "next"`
        });
        res.json(result.data);
    } catch {
        res.send("error");
    }
});
