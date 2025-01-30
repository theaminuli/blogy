import jsonServer from 'json-server';
import express from 'express';
import path from 'path';

const server = express();
const router = jsonServer.router(path.join(process.cwd(), 'api/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`JSON Server running on port ${PORT}`));
