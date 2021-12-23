class GrandPiano extends Instrument {
    private _keyboard: number
    private _length: number
    constructor(model: string, manufacturer: string, color: string) {
        super(model, manufacturer, color)
        this._keyboard = Math.floor(Math.random() * (150 - 20 + 1)) + 20;
        this._length = Math.floor(Math.random() * 101)
    }

    public displayInstrument(): void {
        super.displayInstrument()

    }

    public makingSound(): void {
        console.log("Making grand piano sound")
    }

    public set value(value: number) {
        if (value < 20 || value > 150) {
            throw new Error("Out of range!")
        }
        this._keyboard = value;
    }


    public set length(value: number) {
        if (value < 0) {
            throw new Error("Out of range!")
        }
        this._length = value;
    }


    //Getters
    public get keyboard(): number {
        return this._keyboard
    }
}