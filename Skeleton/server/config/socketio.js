var socketio = require('socket.io');
var _ = require('underscore-node');

module.exports.listen = function (app) {
    io = socketio.listen(app);
    io.on('connection', function (socket) {
        socket.on('message', function (msg) {
            var escapedMsg = _.escape(msg.message);
            if (msg.message.length > 0) {
                io.emit('message', {
                    message: escapedMsg,
                    username: msg.username,
                    time: Date.now()
                });
            }
        });
    });

    return io;
}