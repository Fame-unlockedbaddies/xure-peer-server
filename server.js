const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

app.get('/', (req, res) => {
  res.send('Xure PeerJS Server is running.');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Xure PeerJS server started on port', process.env.PORT || 3000);
});

const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: false,
});

app.use('/peerjs', peerServer);

peerServer.on('connection', (client) => {
  console.log('Peer connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('Peer disconnected:', client.getId());
});
