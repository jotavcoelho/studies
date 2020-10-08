import express from 'express';

const router = express.Router();

routes.get('/', (req, res) => {
  res.json({hello: 'world'});
});

export default routes;
