class flashLight2 {
    private _color: string
    private _length: number
    private _lightLevel: number
    private _numberOfBatteries: number

    constructor(color: string) {
        this._color = color
        this._length = Math.floor(Math.random() * 51)
        this._lightLevel = Math.floor(Math.random() * 11)
        this._numberOfBatteries = Math.floor(Math.random() * 5) + 1
    }

    //Methods
    turnFlashLightOn(): void {
        console.log("The Flashlight has turend on")
    }
    turnFlashLightoff(): void {
        console.log("The Flashlight has turend off")
    }
    changeBattery(): void {
        console.log("Battery is low, Please change Battery...")
    }
    displayflashlight1(): void {
        console.log(this)
    }

    //Setters
    public set length(value: number) {
        if (value > 50 || value < 0) {
            throw new Error("Length is out of range!")
        }
        this._length = value
    }


    public set lightLevel(value: number) {
        if (value > 10 || value < 0) {
            throw new Error("Light level is out of range!")
        }
        this._lightLevel = value;
    }
    public set numberOfBatteries(value: number) {
        if (value > 5 || value < 0) {
            throw new Error("Number of batteries is out of range!")
        }
        this._numberOfBatteries = value;
    }

    //Getters
    public get length(): number {
        return this._length
    }
    public get lightLevel(): number {
        return this._lightLevel
    }
    public get numberOfBatteries(): number {
        return this._numberOfBatteries
    }
}