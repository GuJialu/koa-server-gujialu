const Router = require('@koa/router');
const crypto = require('crypto');
const router = new Router()

const token = 'gujialu';

router.get('/', async (ctx, next) => {
    console.log(ctx.query);
    const { signature, echostr, timestamp, nonce } = ctx.query;
    const str = [token, timestamp, nonce].sort().join('');
    console.log(str);

    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    const hashedStr = sha1.digest('hex');

    console.log(hashedStr);
    console.log(hashedStr === signature);

    if (signature === hashedStr) {
        ctx.body = echostr;
    }else{
        ctx.body = 'signature not match';
    }
})

module.exports = router;