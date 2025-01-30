import jsonServer from "json-server";
import express from "express";

const app = express();
const router = jsonServer.router("api/db.json");

app.use(jsonServer.defaults());
app.use("/api", router);

export default app;
