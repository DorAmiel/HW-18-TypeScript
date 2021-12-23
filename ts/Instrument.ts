class Instrument {
    private _model: string
    private _manufacturer: string
    public color: string

    constructor(model: string, manufacturer: string, color: string) {
        this._model = model
        this._manufacturer = manufacturer
        this.color = color
    }

    //Methods
    displayInstrument(): void {
        console.log(this)
    }
    
}