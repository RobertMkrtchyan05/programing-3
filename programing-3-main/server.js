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
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0,0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0 ],
    [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0,0 , 0 ]
    
 ];


grassArr =[];
grassEaterArr=[];
eaterArr =[];
birdArr  =[];
coolArr = [];
poisonArr =[];

 
 const Grass  = require("./grass");
 const GrassEater = require("./grassEater");
 const Eater = require("./eater");
 const Bird = require("./bird");
 const Cool = require("./cool");
 Poison  = require("./poison");



function createObject(){
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

    //  weath = "winter";
      var weath;

function Winter(){
    weath = "winter";
    io.sockets.emit('Winter', weath);
}

function Summer(){
    weath = "summer";
    io.sockets.emit('Summer', weath);
}

function Spring(){
    weath = "spring";
    io.sockets.emit('Spring', weath);
}
function Autumn(){
    weath = "autumn";
    io.sockets.emit('Autumn', weath);
}

function Kill() {
    grassArr =[];
    grassEaterArr=[];
    eaterArr =[];
    birdArr  =[];
    coolArr = [];
    poisonArr =[];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrass() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x,y);
            grassArr.push(gr);
           
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddgrassEater() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            var grEat = new GrassEater(x,y);
                grassEaterArr.push(grEat);
           
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function Eaters() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            var et  = new Eater(x,y);
            eaterArr.push(et);
           
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function Birds() {
    for (var i = 0; i < 4; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            var Bd  = new Bird(x,y);
            birdArr.push(Bd);
           
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function Cools() {
    for (var i = 0; i < 3; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            var cl =new Cool(x,y);
            coolArr.push(cl);
           
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}

io.on('connection', function (socket) {
    createObject();
     socket.on("summer",Summer);
     socket.on("winter",Winter);
     socket.on("spring",Spring);
     socket.on("autumn",Autumn);
     socket.on("kill",Kill);
     socket.on("addGrass",AddGrass);
     socket.on("addgrassEater",AddgrassEater);
     socket.on("eater",Eaters);
     socket.on("bird",Birds);
     socket.on("cool",Cools);

}); 

 
 var statistics = {};
setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.eater = eaterArr.length;
    statistics.bird  =  birdArr.length;
    statistics.cool = coolArr.length;
    statistics.poison = poisonArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)