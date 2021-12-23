class Piano extends Instrument {
    constructor(model, manufacturer, color) {
        super(model, manufacturer, color);
        this._keyboard = Math.floor(Math.random() * (150 - 20 + 1)) + 20;
    }
    displayInstrument() {
        super.displayInstrument();
    }
    makingSound() {
        console.log("Making piano sound");
    }
    set value(value) {
        if (value < 20 || value > 150) {
            throw new Error("Out of range!");
        }
        this._keyboard = value;
    }
    //Getters
    get keyboard() {
        return this._keyboard;
    }
}
