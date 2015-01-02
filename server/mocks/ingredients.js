module.exports = function(app) {
  var express = require('express');
  var ingredientsRouter = express.Router();

  var INGREDIENTS = [
    {
      id: 0,
      recipe: 1,
      quantity: 20,
      unit: 'ml',
      name: 'milk',
    },
    {
      id: 1,
      recipe: 1,
      quantity: 100,
      unit: 'kg',
      name: 'taters',
    },
    {
      id: 2,
      recipe: 1,
      quantity: 1,
      unit: '',
      name: 'steak',
    },
  ];

  ingredientsRouter.get('/', function(req, res) {
    res.send({"ingredients": INGREDIENTS});
  });

  ingredientsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ingredientsRouter.get('/:id', function(req, res) {
    res.send({
      "ingredients": RECIPES[req.params.id]
    });
  });

  ingredientsRouter.put('/:id', function(req, res) {
    res.send({
      "ingredients": {
        "id": req.params.id
      }
    });
  });

  ingredientsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/ingredients', ingredientsRouter);
};
