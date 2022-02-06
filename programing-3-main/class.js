
class Grass {
    constructor(x, y) {
        
     super(x,y)
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiplay++;
        let found = this.chooseCell(0);
        let exact = random(found);
        if (exact && this.multiplay > 3) {
            let x = exact[0];
            let y = exact[1];
            let grass = new Grass(x, y)
            matrix[y][x] = 1;
            grassArr.push(grass);
            this.multiplay = 0;
        }
    }
}

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
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
            [this.x + 1, this.y + 1]
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
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 20;
        } else {
            console.error('there is no way to multiply');
        }
    }
    eat() {
        let found = this.chooseCell(1, 6);
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

                        this.energy = 0;
                    }
                }



            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 34) {
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

            matrix[y][x] = 2
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
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}


class Eater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
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
            [this.x + 1, this.y + 1]
        ];
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

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 55;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
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
                if (matrix[y][x] == char || matrix[y][x] == char1 ) {
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

            let found = this.chooseCell(3, 2);
            let exact = random(found)


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
class Poison {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

}

class Cool {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(char, char1) {

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

        let found = this.chooseCell(1);
        let exact = random(found);
        for (let i = 0; i < found.length; i++) {
            let x = exact[0];
            let y = exact[1];

            let pn = new Poison(x, y);

            matrix[y][x] = 6;
            poisonArr.push(pn);
        }


    }
}

