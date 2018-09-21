const express = require('express');

// Link the controller to route
const movieController = require('../controllers/movieController');
const viewController = require('../controllers/viewController');

// TODO: [2] invoke the Router()
const movieRouter = express.Router();


const handle404 = (err, req, res, next) => {
  // console.error(err);
  res.sendStatus(404);
};

// Edit
movieRouter.get('/:id/edit', movieController.getOne, viewController.showEditForm);

movieRouter.get('/new', viewController.showBlankForm);

// Get One
movieRouter.get('/:id', movieController.getOne, viewController.showOne, viewController.show404);

// Delete
movieRouter.delete('/:id', movieController.destroy, viewController.handleDestroy);

// Update
movieRouter.put('/:id', movieController.update, viewController.handleUpdate);

// Create
movieRouter.post('/', movieController.create, viewController.handleCreate);

// Get all
movieRouter.get('/', movieController.index, viewController.showAll, viewController.show404);

movieRouter.use(handle404);

module.exports = movieRouter;