const Router = require('@koa/router');
const crypto = require('crypto');
const router = new Router()

const token = 'gujialu';

router.get('/', async (ctx, next) => {
    console.log(ctx.query);
    const {signature, echostr, timestamp, nonce}  = ctx.query;
    const str = [token, timestamp, nonce].sort((a, b)=>a>b).join('');

    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    const hashedStr = sha1.digest('hex');

    if(signature === hashedStr){
        ctx.body = echostr;
    }
})

module.exports = router;