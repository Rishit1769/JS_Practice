const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
    // 1. Fixed "req.url" string literal to use the actual variable
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    const extName = String(path.extname(filePath)).toLowerCase();

    // 2. Corrected standard MIME types
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript', // Fixed: was 'text.javascript'
        '.png': 'image/png',      // Fixed: was 'text/png'
        '.json': 'application/json' // Fixed: was 'text.json'
    };

    const contentType = mimeTypes[extName] || 'application/octet-stream';

    // 3. Changed variable name above to 'filePath' to match this call
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Not Found</h1>", "utf-8"); 
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // 4. Used dynamic contentType instead of hardcoding "text/html"
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
        }
    });
}); // 5. Added the missing closing bracket for createServer

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});