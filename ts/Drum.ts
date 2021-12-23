class Drum extends Instrument {
    private _diameter: number
    constructor(model: string, manufacturer: string, color: string) {
        super(model, manufacturer, color)
        this._diameter = Math.floor(Math.random() * 51)
    }

    public displayInstrument(): void {
        super.displayInstrument()

    }

    public makingSound(): void {
        console.log("Making drum sound")
    }

    public set value(value: number) {
        if (value < 0 || value > 50) {
            throw new Error("Out of range!")
        }
        this._diameter = value;
    }

    //Getters
    public get diameter(): number {
        return this._diameter
    }
}