import express from 'express';
import dbConnect from './database'
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();
dbConnect();

const port = process.env.PORT || 6000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});