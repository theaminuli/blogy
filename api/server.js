import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Default export for Vercel serverless function with error handling
export default async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      server(req, res);
      resolve();
    });
  } catch (error) {
    console.error('Error in function invocation:', error);
    res.status(500).send('Internal Server Error');
  }
};
