const AvailableSpace = 100;
let InstallationSize = prompt("Gigabytes to be installed:","GB");

if (AvailableSpace <= InstallationSize) {
    console.log("There's enough room");
}
else {
    console.log("There's not enough room");
}

