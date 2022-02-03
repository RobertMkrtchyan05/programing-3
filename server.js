var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});
  
 matrix = [
    [5, 1, 1, 0, 0,0, 0, 1, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 0, 0,0, 0, 1, 3 ],
    [0, 0, 0, 0, 1,1, 0, 0, 0, 0,0, 0, 1, 0, 0,1, 0, 1, 0, 0,0, 1, 1, 1 ],
    [1, 1, 2, 0, 1,0, 0, 1, 0, 0,0, 0, 0, 0, 0,1, 0, 0, 0, 0,0, 0, 1, 1 ],
    [0, 0, 1, 0, 1,1, 0, 0, 0, 1,0, 0, 0, 0, 0,1, 0, 1, 0, 0,0, 0,0 , 0 ],
    [1, 1, 0, 0, 1,1, 0, 1, 0, 1,0, 0, 1, 0, 0,1, 0, 0, 0, 0,0, 0, 0, 0 ],
    [1, 1, 0, 0, 0,1, 0, 1, 0, 0,5, 0, 1, 0, 0,0, 1, 1, 0, 0,0, 0, 1, 1 ],
    [1, 1, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 1, 1 ],
    [0, 0, 1, 0, 1,0, 0, 1, 0, 0,0, 0, 1, 0, 4,0, 0, 1, 0, 0,0, 0, 0, 1 ],
    [1, 0, 0, 0, 0,5, 0, 0, 0, 1,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 1, 1 ],
    [0, 1, 2, 0, 0,0, 0, 1, 0, 0,0, 0, 1, 0, 0,1, 0, 1, 5, 0,0, 2, 0, 0 ],
    [1, 0, 1, 0, 0,0, 0, 1, 0, 0,0, 0, 1, 0, 1,0, 0, 1, 0, 0,0, 0, 1, 5 ]
    
 ];
 io.sockets.emit('send matrix', matrix);
grassArr =[];
grassEaterArr=[];
eaterArr =[];
birdArr  =[];
coolArr = [];
poisonArr =[];

 Grass  = require("./grass");
 GrassEater = require("./grassEater");
 Eater = require("./eater");
 Bird = require("./bird");
 Cool = require("./cool");
 Poison  = require("./poison");


function createObject(matrix){
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2){
                var grEat = new GrassEater(x,y);
                grassEaterArr.push(grEat);
     
            }
            else if(matrix[y][x] == 3){
                var et  = new Eater(x,y);
                eaterArr.push(et);
     
            }
            else if(matrix[y][x] == 4){
                var Bd  = new Bird(x,y);
                birdArr.push(Bd);
     
            }
            else if(matrix[y][x] == 5) {
                var cl =new Cool(x,y);
                coolArr.push(cl);
            }
            else if(matrix[y][x] == 6) {
                var pn =new Poison(x,y);
                poisonArr.push(pn);
            }				
        }
     }

            io.sockets.emit('send matrix', matrix);
     }

    


     function game(){
        for (var i in grassArr){
            grassArr[i].mul();
        }
        for(var i in grassEaterArr){
            grassEaterArr[i].eat();
        }
        for(var i in eaterArr){
             eaterArr[i].eat();
        }
        for(var i in birdArr){
            birdArr[i].eat();
        }
        for (var i in coolArr){
            coolArr[i].mul();
        }

        io.sockets.emit('send matrix', matrix);
     }

     setInterval(game,1000);

     io.on('connection', function ()  {
        createObject(matrix);
    })
     
