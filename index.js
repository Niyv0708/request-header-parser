// index.js
// Request Header Parser Microservice

var express = require('express');
var app = express();

// Enable CORS
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// API endpoint
app.get('/api/whoami', function(req, res) {
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  
  res.json({
    ipaddress,
    language,
    software
  });
});

// Root path handler for FCC tests
app.get('/', function(req, res) {
  res.json({
    "message": "Welcome to the Request Header Parser Microservice",
    "api_endpoint": "/api/whoami"
  });
});

// Vercel compatible port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});