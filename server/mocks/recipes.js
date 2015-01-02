module.exports = function(app) {
  var express = require('express');
  var recipesRouter = express.Router();

  var RECIPES = [
    {
      id: 0,
      title: 'Bad Motha Goose',
      slug: 'bad-motha-goose',
      date: 0,
      ingredients: [0, 1, 2],
    },
    {
      id: 1,
      title: 'Concrete Octopus',
      slug: 'concrete-octopus',
      date: 0,
      ingredients: [],
    }
  ];

  recipesRouter.get('/', function(req, res) {
    res.send({"recipes": RECIPES});
  });

  recipesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  recipesRouter.get('/:id', function(req, res) {
    res.send({
      "recipes": RECIPES[req.params.id]
    });
  });

  recipesRouter.put('/:id', function(req, res) {
    res.send({
      "recipes": {
        "id": req.params.id
      }
    });
  });

  recipesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/recipes', recipesRouter);
};
