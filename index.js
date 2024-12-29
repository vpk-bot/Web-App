const express = require('express');
const app = express();
const port = 3000; // This is the port your application will use

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
