class Drum extends Instrument {
    constructor(model, manufacturer, color) {
        super(model, manufacturer, color);
        this._diameter = Math.floor(Math.random() * 51);
    }
    displayInstrument() {
        super.displayInstrument();
    }
    makingSound() {
        console.log("Making drum sound");
    }
    set value(value) {
        if (value < 0 || value > 50) {
            throw new Error("Out of range!");
        }
        this._diameter = value;
    }
    //Getters
    get diameter() {
        return this._diameter;
    }
}
