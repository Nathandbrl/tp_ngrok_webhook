console.log("Démarrage de l'application simulée sur le port 3000");
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello form the deployed app!');
});

server.listen(3000, '0.0.0.0', () => {
    console.log('App running on port 3000');
});
