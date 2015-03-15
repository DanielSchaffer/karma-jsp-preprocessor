var jsp = require('node-jsp');

function createJspPreprocessor(args, config, logger) {

    return function jspPreprocessor(content, file, done) {

        var model = args;

        jsp(file.originalPath, content, model, config)
            .then(function (renderedContent) {
                done(null, renderedContent)
            }, function (error) {
                done(error);
            });

    };
}
createJspPreprocessor.$inject = ['args', 'config.jspPreprocessor', 'logger'];

module.exports = {
    'preprocessor:jsp': ['factory', createJspPreprocessor]
};