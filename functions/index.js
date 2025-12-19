const functions = require("firebase-functions");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const isDev = process.env.NODE_ENV === "development";
const app = next({ dev: isDev, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();

let server;

const api = functions.https.onRequest(async (req, res) => {
  if (!server) {
    await app.prepare();
    server = createServer(handle);
  }

  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

exports.api = api;
exports.render = api;
