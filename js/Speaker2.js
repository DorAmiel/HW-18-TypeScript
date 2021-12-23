class Speaker2 {
    constructor(color, volumeLevel) {
        this._color = color;
        this._volumeLevel = volumeLevel;
    }
    TurnOnSpeaker2() {
        console.log("The speaker has turned on");
    }
    TurnOffSpeaker2() {
        console.log("The speaker has turned off");
    }
    voiceAlert() {
        console.log("The speaker has made sound");
    }
    displaySpeaker2() {
        console.log(this);
    }
    //Setters
    set color(value) {
        if (value === "Gray" || value === "Black" || value === "White") {
            this._color = value;
        }
        else {
            throw new Error("Color is not good!");
        }
    }
    set volumeLevel(value) {
        if (value > 10 || value < 0) {
            throw new Error("Volume level is out of range...");
        }
        this._volumeLevel = value;
    }
    //Getters
    get color() {
        return this._color;
    }
    get volumeLevel() {
        return this._volumeLevel;
    }
}
