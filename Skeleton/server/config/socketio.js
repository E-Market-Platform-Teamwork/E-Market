module.exports = function (app) {
    var http = require('http').Server(app);
    var io = require('socket.io')(http);


    io.on('connection', function (socket) {
        socket.emit('message', { message: 'Connected' })
        socket.on('message', function (msg) {
            console.log(msg.message);
        });
    });

    http.listen(3001, function () {
        console.log('listening on *:3000');
    });
}