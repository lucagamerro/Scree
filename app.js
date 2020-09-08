if (attivato !== "si"){
    document.getElementById("modal").style.display = "none";
}

window.onload = function() { setInterval( orologio, 100); }
temp(); 
loadlista();
orologio();

for (i = 0; i < 1000; i++) {
    time = time + 30000;
    setInterval(now, time);
}

console.log("Città: " + citta);
console.log("Ora caricamento: " + oraFinale);
setTimeout(function() {
    console.log("Meteo: " + meteo);
}, 200);