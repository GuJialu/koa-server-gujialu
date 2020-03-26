const Router = require('@koa/router');
const crypto = require('crypto');
const router = new Router({prefix: '/dev'});

const token = 'gujialu';

function checkSignature(ctx) {
    console.log(ctx.query);
    const { signature, echostr, timestamp, nonce } = ctx.query;
    const str = [token, timestamp, nonce].sort().join('');

    const sha1 = crypto.createHash('sha1');
    const hashedStr = sha1.digest('hex');

    return hashedStr === signature;
}

router.get('/', async (ctx, next) => {
    if (checkSignature(ctx)) {
        ctx.body = echostr;
    } else {
        ctx.body = 'signature not match';
    }
})

router.post('/', async (ctx, next) => {
    if (!checkSignature(ctx)) {
        ctx.body = 'signature not match';
    }
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
})

router.get('/welcome', async (ctx, next) => {
    ctx.body = 'welcome';
})

module.exports = router;