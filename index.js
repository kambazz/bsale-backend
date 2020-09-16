import app from './app.js';

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
    console.log('Appi Ok')
});

server.on('error', (e) => {
    console.log(e);
})