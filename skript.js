var matrix = [
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
 
 var side = 60;
 var grassArr =[];
 var grassEaterArr=[];
 var  eaterArr =[];
 var  birdArr  =[];
 var coolArr = [];
 var poisonArr =[];
 
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    var Grass1 = new Grass (1,2)
    Grass1.chooseCell(0);
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
     console.log(grassArr);
     
 }
 

 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 


            
            if (matrix[y][x] == 1) {
                fill("green");
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
 }
 


