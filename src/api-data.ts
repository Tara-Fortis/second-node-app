import axios from 'axios';
import http, { IncomingMessage } from 'http';

http.createServer((requ: IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        responseType: 'json'
    })
        .then(apiData => {
            res.write('<h2>Sample API Data</h2>');
            res.write(JSON.stringify(apiData.data));
            res.end();
        })
        .catch(error => {
            res.write('<h2>Error fetching API data</h2>'); res.end()
        });
}).listen(4000);
