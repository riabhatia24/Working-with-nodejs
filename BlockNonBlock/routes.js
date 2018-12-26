const fs = require('fs');

const requestHandler = (req, res) => {
const url = req.url;
const method = req.method;

if(url === '/'){
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body><form action = "/message" method="POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}

if(url === '/users'){
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body><ul><li>User1></li><li>User2</li></ul></body>');
    res.write('</html>');
    return res.end();
}

if(url === '/create-user' && method === 'POST'){
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body>Request Accepted</body>');
    res.write('</html>');
    return res.end();
}

if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        res.write('<html>');
        res.write('<head></head>');
        res.write('<body> Ria says');
        res.write(message);
        res.write('</body>');
        res.write('</html>');
        return res.end();
       
    })
}


};

module.exports = requestHandler;