var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
        response.end('Very good you are very smart to have come to the good server')
};

function handleRequestMean(request, response){
    response.end('You are an idiot coming to the mean server')
};

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequestMean);

server.listen(PORT1, function(){
    console.log('Server listening on: http://localhost:' + PORT1)
});

server2.listen(PORT2, function(){
    console.log('Server listening on: http://localhost:' + PORT2)
});


