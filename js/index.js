//------------------------EX1------------------------
let newSpeaker1_1 = new Speaker1("Black", 8);
newSpeaker1_1.TurnOnSpeaker1();
newSpeaker1_1.TurnOffSpeaker1();
newSpeaker1_1.voiceAlert();
newSpeaker1_1.displaySpeaker1();
let newSpeaker1_2 = new Speaker1("Blue", 3);
newSpeaker1_2.TurnOnSpeaker1();
newSpeaker1_2.TurnOffSpeaker1();
newSpeaker1_2.voiceAlert();
newSpeaker1_2.displaySpeaker1();
//------------------------EX1------------------------
console.log("----------------------------------------------------------");
//------------------------EX2------------------------
let newSpeaker2_1 = new Speaker2("Gray", 8);
newSpeaker2_1.TurnOnSpeaker2();
newSpeaker2_1.TurnOffSpeaker2();
newSpeaker2_1.voiceAlert();
newSpeaker2_1.displaySpeaker2();
newSpeaker2_1.volumeLevel = 9;
console.log(newSpeaker2_1.volumeLevel);
newSpeaker2_1.color = "Black";
console.log(newSpeaker2_1.color);
let newSpeaker2_2 = new Speaker2("Gray", 8);
newSpeaker2_2.TurnOnSpeaker2();
newSpeaker2_2.TurnOffSpeaker2();
newSpeaker2_2.voiceAlert();
newSpeaker2_2.displaySpeaker2();
//Error Check!!
// newSpeaker2_2.volumeLevel = 11
// console.log(newSpeaker2_2.volumeLevel)
// newSpeaker2_2.color = "Red"
// console.log(newSpeaker2_2.color)
//------------------------EX2------------------------
console.log("----------------------------------------------------------");
//------------------------EX3------------------------
let newFlashLight1_1 = new flashLight1("Black", 7, 3, 5);
newFlashLight1_1.turnFlashLightOn();
newFlashLight1_1.turnFlashLightoff();
newFlashLight1_1.changeBattery();
newFlashLight1_1.displayflashlight1();
let newFlashLight1_2 = new flashLight1("Brown", 1, 6, 12);
newFlashLight1_2.turnFlashLightOn();
newFlashLight1_2.turnFlashLightoff();
newFlashLight1_2.changeBattery();
newFlashLight1_2.displayflashlight1();
//------------------------EX3------------------------
console.log("----------------------------------------------------------");
//------------------------EX4------------------------
let newFlashLight2_1 = new flashLight2("Black");
newFlashLight2_1.turnFlashLightOn();
newFlashLight2_1.turnFlashLightoff();
newFlashLight2_1.changeBattery();
newFlashLight2_1.displayflashlight1();
let newFlashLight2_2 = new flashLight2("Brown");
newFlashLight2_2.turnFlashLightOn();
newFlashLight2_2.turnFlashLightoff();
newFlashLight2_2.changeBattery();
newFlashLight2_2.displayflashlight1();
//Error Check!!
// newFlashLight2_2.numberOfBatteries = 51
// console.log(newFlashLight2_2.numberOfBatteries)
//------------------------EX4------------------------
console.log("----------------------------------------------------------");
//------------------------EX5------------------------
let newCar = new Car("Kia", "Picanto", "Black");
newCar.displayCar();
//Error Check
// newCar.engineVolume= 5001
// console.log(newCar.engineVolume)
console.log("----------------------------------------------------------");
let newRacingCar = new RacingCar("Bugatti", "Veyron", "Black");
newRacingCar.displayCar();
//Error Check
// newRacingCar.maxSpeed = 101
// console.log(newRacingCar.maxSpeed)
//------------------------EX5------------------------
//------------------------EX6------------------------
let newGuitar = new Guitar("", "", "");
newGuitar.displayInstrument();
newGuitar.makingSound();
let newDrum = new Drum("", "", "");
newDrum.displayInstrument();
newDrum.makingSound();
let newPiano = new Piano("", "", "");
newPiano.displayInstrument();
newPiano.makingSound();
let newGrandPiano = new GrandPiano("", "", "");
newGrandPiano.displayInstrument();
newGrandPiano.makingSound();
//------------------------EX6------------------------
