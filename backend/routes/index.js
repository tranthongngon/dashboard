const accountRouter = require('./account');

const route = (app) => {
  app.use('/', accountRouter);
};

module.exports = route;
