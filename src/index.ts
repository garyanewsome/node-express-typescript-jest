import express from 'express';
import log from 'loglevel';

import router from './router';

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   console.log('hello friend')
//   res.send('Hello NinjaPanzer!');
//   log.debug({router})
// });

app.use('/', router);

app.listen(port, () => {
  log.info(`Example app listening at http://localhost:${port}`);
});
