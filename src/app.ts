import express from 'express';

import mainRouter from './routers/main';

const app = express();

app.use(express.json());

app.use(mainRouter);

export default app;