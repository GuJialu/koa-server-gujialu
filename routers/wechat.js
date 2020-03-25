const Router = require('@koa/router');
const router = new Router({ prefix: '/user' })

router.get('/', async (ctx, next) => {
    ctx.body = 'Some User'
})

module.exports = router;