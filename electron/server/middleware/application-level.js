module.exports = function (req, res, next) {
    console.log(` request: ${req.method} ${req.url}`);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
};