const Koa = require('koa');
const server = new Koa();

server.use(async context => {
    context.body = "Hello from Koa";
});

server.listen(3000);

