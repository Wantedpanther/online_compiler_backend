const {runCode} = require("./run-code");
const {supportedLanguages} = require("./run-code/instructions");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const client_app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const {info} = require("./run-code/info");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const corsOpts = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  };
app.use(cors(corsOpts));

const sendResponse = (res, statusCode, body) => {
    const timeStamp = Date.now()

    res.status(statusCode).send({
        timeStamp,
        status: statusCode,
        ...body
    })
}

app.post("/", async (req, res) => {
    try {
        const output = await runCode(req.body)
        sendResponse(res, 200, output)
    } catch (err) {
        sendResponse(res, err?.status || 500, err)
    }
})

app.get('/list', async (req, res) => {
    const body = []

    for(const language of supportedLanguages) {
        body.push({
            language,
            info: await info(language),
        })
    }

    sendResponse(res, 200, {supportedLanguages: body})
})

app.listen(port);

client_app.use(express.static(path.join(__dirname, "build")));
client_app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

client_app.listen(5000);