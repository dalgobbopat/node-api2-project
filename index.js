const express = require('express');

const postsRouter = require('./router.js');

const server = express ();

server.use(express.json());

server.use("/api/posts", postsRouter);

server.get('/', (req, res) => {
  res.send('hello world');
});

server.listen(8000, () => {
  console.log('!====== Server Running on http://localhost:8000 ======!');
});