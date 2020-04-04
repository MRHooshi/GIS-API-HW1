const notfound = function(req, res, next) {
    res.status(404);
    res.json({"error" : "Not Found"})
}

module.exports = notfound 