const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const app = express();

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/dishes/:dishId',dishRouter);
app.use('/promotions',promoRouter);
app.use('/promotions/:promoId',promoRouter);
app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});