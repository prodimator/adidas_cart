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


const port = process.env.PORT || 5000;
app.listen(port);