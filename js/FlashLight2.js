class flashLight2 {
    constructor(color) {
        this._color = color;
        this._length = Math.floor(Math.random() * 51);
        this._lightLevel = Math.floor(Math.random() * 11);
        this._numberOfBatteries = Math.floor(Math.random() * 5) + 1;
    }
    //Methods
    turnFlashLightOn() {
        console.log("The Flashlight has turend on");
    }
    turnFlashLightoff() {
        console.log("The Flashlight has turend off");
    }
    changeBattery() {
        console.log("Battery is low, Please change Battery...");
    }
    displayflashlight1() {
        console.log(this);
    }
    //Setters
    set length(value) {
        if (value > 50 || value < 0) {
            throw new Error("Length is out of range!");
        }
        this._length = value;
    }
    set lightLevel(value) {
        if (value > 10 || value < 0) {
            throw new Error("Light level is out of range!");
        }
        this._lightLevel = value;
    }
    set numberOfBatteries(value) {
        if (value > 5 || value < 0) {
            throw new Error("Number of batteries is out of range!");
        }
        this._numberOfBatteries = value;
    }
    //Getters
    get length() {
        return this._length;
    }
    get lightLevel() {
        return this._lightLevel;
    }
    get numberOfBatteries() {
        return this._numberOfBatteries;
    }
}
