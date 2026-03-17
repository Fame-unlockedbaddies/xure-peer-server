const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
app.get('/', (req, res) => res.send('Xure PeerJS Server is running.'));
const server = app.listen(process.env.PORT || 3000);
const peerServer = ExpressPeerServer(server, { path: '/' });
app.use('/peerjs', peerServer);
