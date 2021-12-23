class Speaker1 {
    constructor(color, volumeLevel) {
        this.color = color;
        this.volumeLevel = volumeLevel;
    }
    //Methods
    TurnOnSpeaker1() {
        console.log("The speaker has turned on");
    }
    TurnOffSpeaker1() {
        console.log("The speaker has turned off");
    }
    voiceAlert() {
        console.log("The speaker has made sound");
    }
    displaySpeaker1() {
        console.log(this);
    }
}
