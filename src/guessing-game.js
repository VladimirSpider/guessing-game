class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.ourGuess;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min === 0) this.ourGuess = Math.round((this.max - this.min) / 2);
        if (this.min !== 0) this.ourGuess = this.min + Math.round((this.max - this.min) / 2);
        return this.ourGuess;
    }

    lower() {
        this.max = this.ourGuess;
    }

    greater() {
        this.min = this.ourGuess;
    }
}

module.exports = GuessingGame;
