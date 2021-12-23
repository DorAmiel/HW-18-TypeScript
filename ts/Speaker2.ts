class Speaker2 {
    private _color: string
    private _volumeLevel: number

    constructor(color: string, volumeLevel: number) {
        this._color = color
        this._volumeLevel = volumeLevel
    }


    TurnOnSpeaker2(): void {
        console.log("The speaker has turned on")
    }
    TurnOffSpeaker2(): void {
        console.log("The speaker has turned off")
    }
    voiceAlert(): void {
        console.log("The speaker has made sound")
    }
    displaySpeaker2(): void {
        console.log(this)
    }

    //Setters
    public set color(value: string) {
        if (value === "Gray" || value === "Black" || value === "White") {
            this._color = value
        } else {
            throw new Error("Color is not good!")
        }
    }
    public set volumeLevel(value: number) {
        if (value > 10 || value < 0) {
            throw new Error("Volume level is out of range...")
        }
        this._volumeLevel = value

    }

    //Getters

    public get color(): string {
        return this._color
    }

    public get volumeLevel(): number {
        return this._volumeLevel
    }
}