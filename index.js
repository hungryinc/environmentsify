'use strict'

var through = require('through'),
    path = require('path'),
    fs = require('fs')

module.exports = function(env) {

    return function(file) {

        var filepath = path.dirname(file) + '/' + env + '/' + path.basename(file);

        if ( ! fs.existsSync(filepath)) {
            return through();
        }

        var replace = function() {
            var content = fs.readFileSync(filepath, 'utf8');

            this.queue(content);
        }

        return through(replace);
    }

}