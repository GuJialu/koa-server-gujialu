const Koa = require('koa');
const wechatRouter = require('./routers/wechat');
const app = new Koa();

app.use(wechatRouter.routes(), wechatRouter.allowedMethods());

app.listen(3000);