const socketListners = (io) => {
  io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`user disconnected: ${socket.id}`);
    });

    socket.on('outgoing:call', (data) => {
      const {fromOffer, to} = data;
      socket.to(to).emit('incomming:call', {
        from: socket.id, offer: fromOffer,
      });
    });

    socket.on('call:accepted', (data) => {
      const {answere, to} = data;
      socket.to(to).emit('incomming:answere', {
        from: socket.id, offer: answere,
      });
    });
  });
};

module.exports = socketListners;
