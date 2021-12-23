class RacingCar extends Car{
    private _maxSpeed: number
    public _racesParticipation : number
    constructor(CarManufacturer: string, model: string, color: string){
        super(CarManufacturer,model,color)
        this._maxSpeed = Math.floor(Math.random() * (500 - 200 + 1) ) + 200;
        this._racesParticipation = Math.floor(Math.random() * 100) + 1;
    }

    //Methods 
    public displayCar(): void {
        super.displayCar()
    }

    
    //Setters
    public set maxSpeed(value : number) {
        if(value>500||value<200){
            throw new Error("Max speed is out of range!")
        }
        this._maxSpeed = value;
    }
    public set racesParticipation(value : number) {
        if(value>100|| value<0){
            throw new Error("Races participation is out of range!")
        }
        this._racesParticipation = value;
    }
    //Getters
    public get maxSpeed() : number {
        return this._maxSpeed
    }
    public get racesParticipation() : number {
        return this._racesParticipation
    }
    
}