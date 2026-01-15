"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const accounting_1 = __importDefault(require("accounting"));
// run server
http_1.default.createServer((requ, res) => {
    const subTotal = 50.10;
    const tax = subTotal * 0.13;
    const total = subTotal + tax;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Tax Calculator</h1>');
    res.write(`<p>Sub-Total: ${accounting_1.default.formatMoney(subTotal)}</p>`);
    res.write(`<p>Tax: ${accounting_1.default.formatMoney(tax)}`);
    res.write(`<p>Total: ${accounting_1.default.formatMoney(total)}`);
    res.end();
}).listen(3000);
