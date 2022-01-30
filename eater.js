let LivingCreature = require('./LivingCreature') 

module.exports =class Eater  extends LivingCreature {


    constructor(x, y) {
        super(x,y);
        this.energy = 20;
        
    }
    
    chooseCell(char, char1, char2, char3) {
        this.getNewCordinates();
        let result = [];


        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];


            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char || matrix[y][x] == char1 || matrix[y][x] == char2 || matrix[y][x] == char3) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }

    mul() {

        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new Eater(x, y);
            matrix[y][x] = 3;
            eaterArr.push(eater);

            this.energy = 20;
        }
        else {
            console.error('there is no way to multiply');
        }

    }
    eat() {
        let found = this.chooseCell(1, 2, 6, 5);
        let exact = random(found)


        if (exact) {
            this.energy += 4;
            let x = exact[0];
            let y = exact[1];


            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)

                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)

                }
                for (let i = 0; i < poisonArr.length; i++) {
                    if (poisonArr[i].x == x && poisonArr[i].y == y) {
                        poisonArr.splice(i, 1)
                        this.energy == 0;
                    }
                }

                for (let i = 0; i < coolArr.length; i++) {
                    if (coolArr[i].x == x && coolArr[i].y == y) {
                        coolArr.splice(i, 1)
                        this.energy +=38;
                    }
                }

            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 44) {
                this.mul()
            }
            else if (this.energy == 0) {
                this.die()



            }


        }
        else {
            this.move()
        }
    }
    move() {
        let found = this.chooseCell(0);

        let exact = random(found)


        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < eaterArr.length; i++) {
            if (eaterArr[i].x == this.x && eaterArr[i].y == this.y) {
                eaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }

}