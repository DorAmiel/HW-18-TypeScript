class flashLight1 {
    constructor(color, length, lightLevel, numbernumberOfBatteries) {
        this._color = color;
        this._length = length;
        this._lightLevel = lightLevel;
        this._numberOfBatteries = numbernumberOfBatteries;
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
}
