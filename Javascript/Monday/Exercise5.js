let PhoneCharging = confirm("Laddas Mobiltelefonen?")
let PhoneAvailable = confirm("Tryck på OK För att Acceptera en uppdatering");

if (PhoneAvailable === PhoneCharging) {
    console.log("Uppdaterar mjukvara & system");
}
else {
(console.log("En uppdatering kan inte göras för närvarande")); 
}

PhoneAvailable && PhoneAvailable 
? console.log("Uppdaterar mjukvara & system") : console.log("En uppdatering kan inte göras för närvarande");