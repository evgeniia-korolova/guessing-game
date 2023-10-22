class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.result = 0;
  }

  guess() {
    this.result = Math.ceil((this.max - this.min) / 2 + this.min);
    return this.result;
  }

  lower() {
    this.max = this.result;
  }

  greater() {
    this.min = this.result;
  }
}

module.exports = GuessingGame;
