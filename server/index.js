require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/user_info', (req, res, next) => {
    const sql = `
    SELECT *
    FROM "user_info"
    `;
    db.query(sql)
      .then(result => res.json(result.rows))
      .catch(err => next(err));
});

app.post('/api/sign_up', (req, res, next) => {
  if (!req.body) {
    return next(new ClientError('Missing required content', 404))
  }
  const sql = `
  INSERT INTO "user_info" ("user_name", "user_email", "user_password")
  VALUES                  ($1, $2, $3)
  RETURNING *;
  `
  const params = [req.body.user_name, req.body.user_email, req.body.user_password];
  db.query(sql, params)
    .then(result => {
      const row = result.rows[0]
      res.status(201).json(row);
    })
})

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});