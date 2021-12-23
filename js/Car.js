class Car {
    constructor(CarManufacturer, model, color) {
        this._CarManufacturer = CarManufacturer;
        this._model = model;
        this.color = color;
        this._engineVolume = Math.floor(Math.random() * 4001);
    }
    //Methods
    displayCar() {
        console.log(this);
    }
    //Setters
    set engineVolume(value) {
        if (value > 4000 || value < 0) {
            throw new Error("Engine volume is Out of Range!");
        }
        this._engineVolume = value;
    }
    //Getters
    get engineVolume() {
        return this._engineVolume;
    }
}
