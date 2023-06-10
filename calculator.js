class Calculator {
    constructor() {
        this.primaryOut = [];
        this.secondaryOut = [];
        this.result = 0;
    }

    calculate() {
        this.result = eval(this.primaryOut.join(undefined));
    }


    appendOut(char) {
        this.primaryOut.push(char);
    }
    
    clear() {
        this.primaryOut = [];
        this.secondaryOut = [];
    }
    
    updateOut() {
        return this.primaryOut;
    }
}