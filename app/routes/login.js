module.exports = app => {
    app.get("/", (req, res) => {
        app.app.controllers.login.index(app, req, res);
    });
};