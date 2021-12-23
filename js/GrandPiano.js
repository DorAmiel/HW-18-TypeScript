class GrandPiano extends Instrument {
    constructor(model, manufacturer, color) {
        super(model, manufacturer, color);
        this._keyboard = Math.floor(Math.random() * (150 - 20 + 1)) + 20;
        this._length = Math.floor(Math.random() * 101);
    }
    displayInstrument() {
        super.displayInstrument();
    }
    makingSound() {
        console.log("Making grand piano sound");
    }
    set value(value) {
        if (value < 20 || value > 150) {
            throw new Error("Out of range!");
        }
        this._keyboard = value;
    }
    set length(value) {
        if (value < 0) {
            throw new Error("Out of range!");
        }
        this._length = value;
    }
    //Getters
    get keyboard() {
        return this._keyboard;
    }
}
