const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the welcome page
  if (!req.session.loggedIn) {
    res.redirect('/welcome');
  } else {
    // If the user is logged in, execute the route function
    // We call next() if the user is authenticated
    next();
  }
};

module.exports = withAuth;
