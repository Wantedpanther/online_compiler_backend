const express = require('express');
const { exec } = require('child_process');
const cors = require("cors");
const corsOpts = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
};
const app = express();
const port = 8000;
app.use(cors(corsOpts));

app.use(express.json());

app.post('/', (req, res) => {
  const code = req.body.code;
  const compileCommand = `g++ -x c++ -o output - <<EOF\n${code}\nEOF`;
//   exec(`g++ -o compiled_code -xc++ -`, (error, stdout, stderr) => {
//     if (error) {
//       res.send(stderr);
//     } else {
//       res.send(stdout);
//     }
//   }).stdin.end(code);
  exec(compileCommand, (error, stdout, stderr) => {
    if (error) {
    //   console.error(`Compilation failed: ${error}`);
      res.send(stderr);
    }
    res.send(stdout);
  });
});
app.get('/list', async (req, res) => {
    const body = []

    // for(const language of supportedLanguages) {
    //     body.push({
    //         language,
    //         // info: await info(language),
    //     })
    // }

    // sendResponse(res, 200, {supportedLanguages: body})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});