class GuessingGame {
    constructor() {
        this.a;
        this.b;
    }
    setRange(min, max) {
        this.a = min;
        this.b = max;
    }
    guess() {
        this.c = (this.b - this.a) / 2;
        this.d = Math.ceil(this.c);
        this.e = Math.floor(this.c);
        return (this.a + this.d);
    }
    lower() {
        this.b = this.b - this.e;
    }
    greater() {
        this.a = this.a + this.d;
    }
}

module.exports = GuessingGame;