const { fork } = require("child_process");
const http = require("http");
const path = require("path");
const url = require("url");

const server = http.createServer();
server.on("request", (req, res) => {
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
    const parsedURL = url.parse(req.url, true);
    if (parsedURL.query.url) {
        const process = fork("childfileupload.js");
        process.send(path.join(__dirname, parsedURL.query.url));
        process.on("message", message => {
            if (message == null) {
                res.end();
            } else {
                res.write(Buffer.from(message));
            }
        });
    }
});
server.listen(4000);