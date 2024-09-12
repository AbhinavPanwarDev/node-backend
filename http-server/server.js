const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New req received...\n`;
    fs.appendFile("log.txt", log, (err,data) => {
        switch (req.url){
            case "/":
                res.end("homepage");
                break;
            case "/about":
                res.end("Abhi");
                break;
            default:
                res.end("404 not found");
        }
    })
});

myServer.listen(8000, () => console.log("server started!!!"));
