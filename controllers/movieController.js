const db = require('../models/movie');

module.exports = {
  /**
     * Middleware function:
     * Get all the sodas and set them in res.locals
     * @param {req} req - Node's Request Object
     * @param {res} res - Node's Response Object
     * @param {next} next - The next middleware function in our route
     * @return {undefined}
     * Find all movies
     */
  // find all movies
  index(req, res, next) {
    db.findAll()
      .then((movies) => {
        res.locals.movies = movies;
        next();
      })
      .catch(err => next(err));
  },
  // Get one movie by id
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((movie) => {
        res.locals.movie = movie;
        next();
      })
      .catch(err => next(err));
  },
  // Destroy
  destroy(req, res, next) {
    db.delete(req.params.id)
      .then(() => {
        next();
      })
      .catch(err => next(err));
  },
  // Create a movie
  create(req, res, next) {
    db.create(req.body)
      .then((movie) => {
        res.locals.movie = movie;
        next();
      })
      .catch(err => next(err));
  },
  // Update a movie
  update(req, res, next) {
    const { id } = req.params;
    const {
      title , starring, year, description, img
    } = req.body;

    db.update({
      id, starring, year, description, img
    })
      .then(() => next())
      .catch(err => next(err));
  },

  // Make a blank movie
  makeBlankMovie(req, res, next) {
    const movie = {
      title: '',
      starring: '',
      year: '',
      description: '',
      img: ''
    };

    res.locals.movie = movie;
    next();
  },
};