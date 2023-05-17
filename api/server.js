const express = require('express');
const middleware = require("./middleware/middleware");
const server = express();

// ekspres'in varsayılan olarak istek gövdelerinde JSON'u ayrıştıramayacağını unutmayın

// global ara yazılımlar ve kullanıcı routelarının buraya bağlanması gerekir
const datarouter =require("./users/users-router");


server.use(middleware.logger);
server.use("/api/posts",datarouter);
server.use(express.json());
server.get('/', (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error!.." });
});
module.exports = server;
