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

  app.get("/services", function(req, res) {
    res.render("pages/services");
  });

  app.get("/contact", function(req, res) {
    res.render("pages/contact");
  });
};
