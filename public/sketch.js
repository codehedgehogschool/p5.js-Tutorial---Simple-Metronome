/*
  CODE HEDGEHOG
  P5.js tutorial
  @author Stephen Monslow
*/
var kick;
var snare;
var ride;
var openhihat;

var metronome = 0;

function setup() {
    createCanvas(displayWidth, displayHeight);

    kick  = loadSound('assets/sounds/kick.wav');
    snare = loadSound('assets/sounds/snare.wav');
    ride  = loadSound('assets/sounds/ride-1.wav');
    openhihat = loadSound('assets/sounds/open-hihat.wav');

    ride.setVolume(0.18);
    openhihat.setVolume(0.3);
}

function draw() {
    metronome+=0.5;

    // if(random(100) > 90) {
    //     ride.play();  
    // }

    if(metronome % 16 === 0) {
        kick.play();
    }

    if(metronome % 32 === 0) {
        snare.play();
    }

    if(metronome % 8 === 0) {
        ride.play();
    }    

    if(metronome % 60 === 0) {
        openhihat.play();
    }  
}

