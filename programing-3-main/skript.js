var socket = io(); 
var side = 25;

 
 function setup() {
    frameRate(5);
    createCanvas( (24 * side)+1,(24 * side)+1);
    background('#acacac');
  
 
     
 }
 socket.on("Winter", function (data) {
    weath = data;
})
socket.on("Summer", function (data) {
    weath = data;
})
socket.on("Spring", function (data) {
    weath = data;
})
socket.on("Autumn", function (data) {
    weath = data;
})

 function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 


            
            if (matrix[y][x] == 1) {

                if (weath == "winter") {
                    fill("white");
                    }
                else if(weath == "summer"){
                    fill("green");
                    }
                else if (weath == "autumn") {
                    fill("#333300");
                }
                else if (weath == "spring") {
                    fill("#4dffa6");
                }

            }
            
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2){
                fill("yellow")
            }
            else if (matrix[y][x] == 3){
                fill("red")
            }
            else if (matrix[y][x] == 4){
                fill("#e68438")
            }
            
            else if (matrix[y][x] == 5){
                fill("black");
            }
            else if (matrix[y][x] == 6){
                fill("#0a0e41")
            }

            rect(x * side, y * side, side, side);
            
        
     
   
        }

    }
}




socket.on('send matrix', nkarel)



function Winter() {
    socket.emit("winter")
}
function Summer() {
    socket.emit("summer")
}
function Spring() {
    socket.emit("spring")
}
function Autumn() {
    socket.emit("autumn")
}
function Kill(){
    socket.emit("kill")
}
function AddGrass(){
    socket.emit("addGrass")
}
function AddgrassEater(){
    socket.emit("addgrassEater")
}
function  Eaters(){
    socket.emit("eater")
}
function Birds(){
    socket.emit("bird")
}
function Cools(){
    socket.emit("cool")
}

