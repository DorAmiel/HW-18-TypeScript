class Guitar extends Instrument {
    private _guitarStrings: number
    constructor(model: string, manufacturer: string, color: string) {
        super(model, manufacturer, color)
        this._guitarStrings = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    }

    public displayInstrument(): void {
        super.displayInstrument()

    }

    public makingSound(): void {
        console.log("Making guitar sound")
    }


    //Setters

    public set value(value: number) {
        if (value < 4 || value > 8) {
            throw new Error ("Out of range!")
        }
        this._guitarStrings = value;
    }

    //Getters
    public get guitarStrings() : number {
        return this._guitarStrings
    }
    

}