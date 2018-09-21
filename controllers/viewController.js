module.exports = {
  // eslint-disable-next-line no-unused-vars

  // Show all
  showAll(req, res) {
    res.render('movie/showAll');
  },

  // Show one
  showOne(req, res) {
    res.render('movie/showOne');
  },
  // Destroys one
  handleDestroy(req, res) {
    res.redirect('/movie');
  },

  // Create blank form
  showBlankForm(req, res) {
    res.render('movie/showNew');
  },
  // Handle Create
  handleCreate(req, res) {
    res.redirect('/movie');
  },

  // Edit
  showEditForm(req, res) {
    res.render('movie/showEdit');
  },

  // Handle Update
  handleUpdate(req, res) {
    const { id } = req.params;
    res.redirect(`/movie/${id}`);
  },

  show404(req, res) {
    res.send(404);
  },
};