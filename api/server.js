import jsonServer from "json-server";
import { createServer } from "http";

const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Micro wrapper for Vercel
export default async function handler(req, res) {
  await new Promise((resolve) => {
    createServer(server).once("request", req, res).listen(0, resolve);
  });
}