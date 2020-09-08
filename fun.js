// Vars
var ico = ["https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/cloud_2601.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/cloud-with-rain_1f327.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/white-sun-with-small-cloud_1f324.png", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/black-sun-with-rays_2600.png"];
var ran, cosa, ora, gradi, tempo, ore, minuti, oraFinale, meteo;
var time = 10000;

// Functions
function now() {
    ran = Math.floor(Math.random() * 7);
    document.body.style.backgroundImage = "url('" + bg[ran] + "')"; 
}

function ora() {
    ora = new Date().getHours();
    if (ora >= 6 && ora <= 11) {
        document.getElementById("giorno").innerHTML = "Buon giorno";
    }
    else if (ora >= 12 && ora <= 17) {
        document.getElementById("giorno").innerHTML = "Buon pomeriggio";
    }
    else if (ora >= 18 && ora <= 21) {
        document.getElementById("giorno").innerHTML = "Buona sera";
    }
    else if (ora >= 22 && ora <= 23) {
        document.getElementById("giorno").innerHTML = "Buona notte";
    }
    else if (ora >= 0) {
        document.getElementById("giorno").innerHTML = "Vai a dormire";
    }
}

function temp() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citta + "&appid=cd6b820eacf999bf57e755c83035179b")  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      gradi = Math.round(parseFloat(data.main.temp)-273.15);
      tempo = data.weather[0].description;
      document.getElementById("gradi").innerHTML = gradi + "&deg;";
      if( tempo.indexOf('rain') > 0 ) {
        document.getElementById("imm").src = ico[1];
        document.getElementById("imm").title = "rain";
        meteo = "rain";
      } else if( tempo.indexOf('cloud') > 0 ) {
        document.getElementById("imm").src = ico[0];
        document.getElementById("imm").title = "cloud";
        meteo = "cloud";
      } else if( tempo.indexOf('sunny') > 0 ) {
        document.getElementById("imm").src = ico[3];
        document.getElementById("imm").title = "sunny";
        meteo = "sunny";
      } else if( tempo.indexOf('sky') > 0 ) {
        document.getElementById("imm").src = ico[2];
        document.getElementById("imm").title = "clear sky";
        meteo = "clear sky";
      }
    })
}

function orologio() {
  var data = new Date();
  ore = data.getHours();
  minuti = data.getMinutes();
  if (minuti < 10){
    minuti = "0" + minuti;
  }
  oraFinale = ore + ":" + minuti;
  document.getElementById("ora").innerHTML = oraFinale;
}

function assegna( quale ) {
  if (quale === "uno") {
    nome = uno.nome;
    icona = uno.icona;
    nome1 = uno.nome1;
    nome2 = uno.nome2;
    nome3 = uno.nome3;
    nome4 = uno.nome4;
    nome5 = uno.nome5;
    sito1 = uno.sito1;
    sito2 = uno.sito2;
    sito3 = uno.sito3;
    sito4 = uno.sito4;
    sito5 = uno.sito5;
  }
  else if (quale === "due") {
    nome = due.nome;
    icona = due.icona;
    nome1 = due.nome1;
    nome2 = due.nome2;
    nome3 = due.nome3;
    nome4 = due.nome4;
    nome5 = due.nome5;
    sito1 = due.sito1;
    sito2 = due.sito2;
    sito3 = due.sito3;
    sito4 = due.sito4;
    sito5 = due.sito5;
  }
  else if (quale === "tre") {
    nome = tre.nome;
    icona = tre.icona;
    nome1 = tre.nome1;
    nome2 = tre.nome2;
    nome3 = tre.nome3;
    nome4 = tre.nome4;
    nome5 = tre.nome5;
    sito1 = tre.sito1;
    sito2 = tre.sito2;
    sito3 = tre.sito3;
    sito4 = tre.sito4;
    sito5 = tre.sito5;
  }
  else if (quale === "quattro") {
    nome = quattro.nome;
    icona = quattro.icona;
    nome1 = quattro.nome1;
    nome2 = quattro.nome2;
    nome3 = quattro.nome3;
    nome4 = quattro.nome4;
    nome5 = quattro.nome5;
    sito1 = quattro.sito1;
    sito2 = quattro.sito2;
    sito3 = quattro.sito3;
    sito4 = quattro.sito4;
    sito5 = quattro.sito5;
  }
}

function tendina( quale, margin ) {
  var tenda = document.getElementById("tenda");
  var lista = document.getElementById("lista");
  var doc = document.getElementById(quale);
  assegna(quale);
  tenda.innerHTML = '<a href="' + sito1 + '" target="_blank">' + nome1 + '</a> <a href="' + sito2 + '" target="_blank">' + nome2 + '</a> <a href="' + sito3 + '" target="_blank">' + nome3 + '</a> <a href="' + sito4 + '" target="_blank">' + nome4 + '</a> <a id="arrow" title="apri tutto" onclick="apriTutto()"> ⏩ </a>';
  tenda.style.marginLeft = margin;
  if (tenda.style.display === "block") {
    tenda.style.display = "none";
    lista.style.marginTop = "12%";
  }
  else if (tenda.style.display === "none") {
    tenda.style.display = "block";
    tenda.style.marginTop = "7.8%";
    lista.style.marginTop = "0.2%";
  }
}

function loadlista() {
  var start1 = document.getElementById("uno");
  var start2 = document.getElementById("due");
  var start3 = document.getElementById("tre");
  var start4 = document.getElementById("quattro");
  start1.innerHTML = uno.icona;
  start2.innerHTML = due.icona;
  start3.innerHTML = tre.icona;
  start4.innerHTML = quattro.icona;
  start1.title = uno.nome;
  start2.title = due.nome;
  start3.title = tre.nome;
  start4.title = quattro.nome;
}

function apriTutto() {
  tenda.style.display = "none";
  lista.style.marginTop = "12%";
  if (sito1 !== "") {
    window.open(sito1);
  }
  if (sito2 !== "") {
    window.open(sito2);
  }
  if (sito3 !== "") {
    window.open(sito3);
  }
  if (sito4 !== "") {
    window.open(sito4);
  }
}