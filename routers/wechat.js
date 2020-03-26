const Router = require('@koa/router');
const router = new Router()

router.get('/', async (ctx, next) => {
    console.log(ctx.request.body);
})

module.exports = router;