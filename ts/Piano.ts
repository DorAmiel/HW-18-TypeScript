class Piano extends Instrument {
    private _keyboard: number
    constructor(model: string, manufacturer: string, color: string) {
        super(model, manufacturer, color)
        this._keyboard = Math.floor(Math.random() * (150 - 20 + 1) ) + 20;
    }

    public displayInstrument(): void {
        super.displayInstrument()

    }

    public makingSound(): void {
        console.log("Making piano sound")
    }

    public set value(value: number) {
        if (value < 20 || value > 150) {
            throw new Error("Out of range!")
        }
        this._keyboard = value;
    }

    //Getters
    public get keyboard(): number {
        return this._keyboard
    }
}