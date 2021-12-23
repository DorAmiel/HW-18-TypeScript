class Instrument {
    constructor(model, manufacturer, color) {
        this._model = model;
        this._manufacturer = manufacturer;
        this.color = color;
    }
    //Methods
    displayInstrument() {
        console.log(this);
    }
}
