const Koa = require('koa')
const app = new Koa()


const middleware = function async(ctx, next) {
  console.log('middleware!')
  console.log(ctx.request.path)
  next()
}
const middleware1 = function async(ctx, next) {
  console.log('middleware!')
  console.log(ctx.request.path)
  next()
}
const middleware2 = function async(ctx, next) {
  console.log('middleware!')
  console.log(ctx.request.path)
  next()
}
app.use(middleware)
app.use(middleware1)
app.use(middleware2)
app.listen(3000)