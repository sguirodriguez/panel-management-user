import express, { Router } from "express";
import user from './user'

const app = express()
const router = Router()

router.get('/', function (request, response) {
    return response.json({
      message: 'Hooray! Welcome to our API!!!',
      timestamp: Date.now(),
    });
  });

app.use('/', router);
app.use('/api/v1/user', user);

export default app;
