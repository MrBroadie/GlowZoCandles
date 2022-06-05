const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const SECRET = process.env.SECRET || 'this is not very secure';

const productRouter = require('./routers/product_router');
const userRouter = require('./routers/user_router');
const ordersRouter = require('./routers/orders_router');
const reviewsRouter = require('./routers/reviews_router');

const app = Express();

app.use(cors())
  .use(session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      // change this when sending to production
      secure: false,
    },
  }))
  .use(morgan('short'))
  .use(Express.json())
  .use(productRouter)
  .use(userRouter)
  .use(ordersRouter);

async function bootstrap () {
  try {
    app.listen(3001, () => {
      console.log('Server up and running on http://localhost:3001');
    });
  } catch (err) {
    console.error(err);
  }
}
bootstrap();