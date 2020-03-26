const Router = require('@koa/router');
const crypto = require('crypto');
const router = new Router({prefix: '/home'});

router.get('/', async (ctx, next) => {
    ctx.body = 'welcome';
})

module.exports = router;