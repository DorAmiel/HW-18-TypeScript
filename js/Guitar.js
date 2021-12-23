class Guitar extends Instrument {
    constructor(model, manufacturer, color) {
        super(model, manufacturer, color);
        this._guitarStrings = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    }
    displayInstrument() {
        super.displayInstrument();
    }
    makingSound() {
        console.log("Making guitar sound");
    }
    //Setters
    set value(value) {
        if (value < 4 || value > 8) {
            throw new Error("Out of range!");
        }
        this._guitarStrings = value;
    }
    //Getters
    get guitarStrings() {
        return this._guitarStrings;
    }
}
