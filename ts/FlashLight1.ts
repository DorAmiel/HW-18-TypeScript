class flashLight1 {
    private _color: string
    private _length: number
    private _lightLevel: number
    private _numberOfBatteries: number

    constructor(color: string, length: number, lightLevel: number, numbernumberOfBatteries: number) {
        this._color = color
        this._length = length
        this._lightLevel = lightLevel
        this._numberOfBatteries = numbernumberOfBatteries
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
}

