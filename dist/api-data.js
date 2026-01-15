"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http_1 = __importDefault(require("http"));
http_1.default.createServer((requ, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    (0, axios_1.default)({
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
        res.write('<h2>Error fetching API data</h2>');
        res.end();
    });
}).listen(4000);
