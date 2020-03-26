const Router = require('@koa/router');
const crypto = require('crypto');
const router = new Router({prefix: '/home'});

router.get('/', async (ctx, next) => {
    const {code, state} = ctx.query;
    console.log('----------------');
    console.log(code);
    console.log('----------------');
    console.log(state);
    ctx.body = 'welcome';
})

module.exports = router;