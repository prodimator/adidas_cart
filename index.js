const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', createProxyMiddleware({
    target: 'https://www.adidas.com',
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = 'https://www.adidas.com';
        proxyRes.headers['Access-Control-Allow-Methods'] = ['GET', 'POST', 'OPTIONS'];
        proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
        proxyRes.headers['Access-Control-Allow-Headers'] = ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'];
    }
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
0

const port = process.env.PORT || 5000;
app.listen(port);

// const express = require('express');
// const proxy = require('http-proxy-middleware');

// const app = express();
// app.use(express.static('client'));

// // Add middleware for http proxying 
// const apiProxy = proxy('/api', { target: 'https://www.adidas.com' });
// app.use('/api', apiProxy);

// // Render your site
// const renderIndex = (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/public/index.html'));
// }
// app.get('/*', renderIndex);

// app.listen(5000, () => {
//     console.log('Listening on: http://localhost:5000');
// });