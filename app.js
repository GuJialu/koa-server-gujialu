const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const wechatRouter = require('./routers/wechat');
const homeRouter = require('./routers/home');

const app = new Koa();
app.use(bodyParser());

app.use(wechatRouter.routes(), wechatRouter.allowedMethods());
app.use(homeRouter.routes(), homeRouter.allowedMethods());

app.listen(process.env.PORT || 3000);