const withAuth = (req, res, next) => {
  // If user not logged in, it will redirect to the login page

  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    // If user logged in, execute the route function that will allow them to view the post
    next();
  }
};

module.exports = withAuth;
