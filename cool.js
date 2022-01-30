let LivingCreature = require('./LivingCreature')


module.exports =class Cool extends LivingCreature{
    constructor(x, y) {
       
        this.energy = 20;
        super(x,y);
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

