class Speaker1 {
    public color: string
    public volumeLevel: number

    constructor(color:string, volumeLevel:number) {
        this.color = color
        this.volumeLevel = volumeLevel
    }

    //Methods
    TurnOnSpeaker1(): void {
        console.log("The speaker has turned on")
    }
    TurnOffSpeaker1(): void {
        console.log("The speaker has turned off")
    }
    voiceAlert(): void {
        console.log("The speaker has made sound")
    }
    displaySpeaker1(): void {
        console.log(this)
    }
}