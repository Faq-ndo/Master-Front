class Coin {
    value = 1;

    getValue = () => {
        return this.value;
    }
}

class SlotMachine {
    static ROULETTE = 3;
    priceValue = 0;
    message = '';
    
    play = (coin) => {
        this.priceValue += coin.getValue();
        this._isWinnerResult(this._generateResult()) ? this._win() : this._lose();
    }

    _generateResult() {
        const result = [];
        for (let i = 0; i < SlotMachine.ROULETTE; i++) {
            const randomBoolean = Math.random() < 0.5;
            result.push(randomBoolean);
        }
        return result;
    }

    _isWinnerResult(result) {
        return result.every(element => !!element);
    }

    _win() {
        console.log(`Congratulations!!!. You won ${this.priceValue} coins!!`);
        this.priceValue = 0;
    }

    _lose() {
        console.log('Good luck next time!!');
    }
}

const slotMachine = new SlotMachine();
const coin = new Coin();
slotMachine.play(coin);
slotMachine.play(coin);
slotMachine.play(coin);