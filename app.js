const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const wechatRouter = require('./routers/wechat');

const app = new Koa();
app.use(bodyParser());

app.use(wechatRouter.routes(), wechatRouter.allowedMethods());

app.listen(process.env.PORT || 3000);