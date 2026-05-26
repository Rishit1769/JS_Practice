// Node.js HTTP Server with File Serving
// Objective: Create a static file server that serves HTML, CSS, JS, PNG, and JSON files

// require() - Import necessary Node.js modules
const http = require("http");  // HTTP module for creating server
const fs = require("fs");  // File system module for reading files
const path = require("path");  // Path module for handling file paths

// Define the port number for the server
const port = 3000;

// createServer() - Creates an HTTP server
// Takes a callback that handles each request (req = request, res = response)
const server = http.createServer((req, res) => {
    // Construct the file path from the request URL
    // __dirname is the current directory
    // If URL is "/", serve "index.html", otherwise serve the requested file
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    // Get the file extension (e.g., .html, .css, .js)
    const extName = String(path.extname(filePath)).toLowerCase();

    // Map file extensions to MIME types
    // MIME types tell browsers how to interpret the file
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',  // Correct MIME type for JavaScript
        '.png': 'image/png',  // Correct MIME type for PNG images
        '.json': 'application/json'  // Correct MIME type for JSON
    };

    // Get the appropriate MIME type, default to 'application/octet-stream' for unknown types
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    // Read the file from disk
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file not found error
            if (err.code === "ENOENT") {
                // Send 404 status and HTML error page
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Not Found</h1>", "utf-8");
            } else {
                // Handle other server errors
                res.writeHead(500);  // 500 Internal Server Error
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // File found: Send success response
            // writeHead() sets the HTTP status code and response headers
            res.writeHead(200, { "Content-Type": contentType });
            // end() sends the file content to the client
            res.end(content, "utf-8");
        }
    });
});

// Start the server listening on the specified port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});