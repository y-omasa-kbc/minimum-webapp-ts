import http, {IncomingMessage, ServerResponse} from 'http'

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end('Response from minimum-webapp-ts'); 
})

server.listen(4000); 