class Car {
    private _CarManufacturer: string
    private _model: string
    public color: string
    private _engineVolume: number

    constructor(CarManufacturer: string, model: string, color: string) {
        this._CarManufacturer = CarManufacturer
        this._model = model
        this.color = color
        this._engineVolume = Math.floor(Math.random() * 4001)
    }

    //Methods
    displayCar():void{
        console.log(this)
    }

    //Setters
    
    public set engineVolume(value : number) {
        if(value>4000||value<0){
            throw new Error("Engine volume is Out of Range!")
        }
        this._engineVolume = value;
    }
    
    //Getters
    
    public get engineVolume() : number {
        return this._engineVolume
    }
    
}