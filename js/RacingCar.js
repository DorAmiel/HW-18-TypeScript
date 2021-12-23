class RacingCar extends Car {
    constructor(CarManufacturer, model, color) {
        super(CarManufacturer, model, color);
        this._maxSpeed = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
        this._racesParticipation = Math.floor(Math.random() * 100) + 1;
    }
    //Methods 
    displayCar() {
        super.displayCar();
    }
    //Setters
    set maxSpeed(value) {
        if (value > 500 || value < 200) {
            throw new Error("Max speed is out of range!");
        }
        this._maxSpeed = value;
    }
    set racesParticipation(value) {
        if (value > 100 || value < 0) {
            throw new Error("Races participation is out of range!");
        }
        this._racesParticipation = value;
    }
    //Getters
    get maxSpeed() {
        return this._maxSpeed;
    }
    get racesParticipation() {
        return this._racesParticipation;
    }
}
