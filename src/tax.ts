import http from 'http';
import accounting from 'accounting';

// run server
http.createServer((requ: http.IncomingMessage, res: http.ServerResponse) => {
    const subTotal: number = 50.10;
    const tax: number = subTotal * 0.13;
    const total: number = subTotal + tax;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Tax Calculator</h1>');
    res.write(`<p>Sub-Total: ${accounting.formatMoney(subTotal)}</p>`);
    res.write(`<p>Tax: ${accounting.formatMoney(tax)}`);
    res.write(`<p>Total: ${accounting.formatMoney(total)}`);
    res.end();
}).listen(3000);