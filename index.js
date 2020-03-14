// Using ES6 syntax is fine because we already have Babel to transpile code.
import express from 'express';
// Create an Express application.
const app = express();
// Define port number for the server.
const PORT = 4000;
// When visitors make a GET request to address "/", specify the response.
app.get('/', (req, res) =>
    res.send(`Node and Express server running on port ${PORT}`)
);
// Send message to the console to confirm that the server is running on the specified port.
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);