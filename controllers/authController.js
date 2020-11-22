module.exports.login = function (request, response) {
    response.status(200).json({
        login: true
    });
}

module.exports.register = function (request, response) {
    response.status(200).json({text: "123"});
}