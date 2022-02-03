let LivingCreature = require('./LivingCreature')



module.exports =class Bird extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 55;
}
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],

            [this.x - 4, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 4, this.y + 4],

            [this.x - 5, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 5, this.y + 5],
            
            [this.x - 6, this.y - 6],
            [this.x, this.y - 6],
            [this.x + 6, this.y - 6],
            [this.x - 6, this.y],
            [this.x + 6, this.y],
            [this.x - 6, this.y + 6],
            [this.x, this.y + 6],
            [this.x + 6, this.y + 6],

            [this.x - 7, this.y - 7],
            [this.x, this.y - 7],
            [this.x + 7, this.y - 7],
            [this.x - 7, this.y],
            [this.x + 7, this.y],
            [this.x - 7, this.y + 7],
            [this.x, this.y + 7],
            [this.x + 7, this.y + 7]
            
            
        ];
       
    }
    chooseCell(char, char1) {
        this.getNewCordinates();
        
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    
    mul() {

        let found = this.chooseCell(0);
        let exact =  found[Math.floor(Math.random() * found.length)];

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];
            let bird = new Bird(x, y);
            matrix[y][x] = 4;
            birdArr.push(bird);

            this.energy = 30;
        }
        else {
            console.error('there is no way to multiply');
        }

    }
    eat() {
        console.log(this.energy);
        

        if (this.energy == 10) {

             let found = this.chooseCell(3,2);
             let exact =  found[Math.floor(Math.random() * found.length)];


            if (exact) {
                this.energy += 20;
                let x = exact[0];
                let y = exact[1];
                console.log(x);


                for (let i = 0; i < eaterArr.length; i++) {
                    if (eaterArr[i].x == x && eaterArr[i].y == y) {
                        eaterArr.splice(i, 1)

                    }
                }
                for (let i = 0; i < grassEaterArr.length; i++) {
                    if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                        grassEaterArr.splice(i, 1)

                    }
                }

                matrix[y][x] = 4;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y
            }
        }
        else {

            //this.mul()
            this.energy -= 5;

        }

    }
}