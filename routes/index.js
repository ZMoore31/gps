module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("pages/index");
  });

  app.get("/about", function(req, res) {
    res.render("pages/about");
  });

  app.get("/staff", function(req, res) {
    res.render("pages/staff");
  });
};
