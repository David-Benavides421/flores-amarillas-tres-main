// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "I just wanna see you smile", time: 10 },
  { text: "I just wanna make you mine", time: 15 },
  { text: "We can spend time, smoke away the time", time: 18 },
  { text: "We can go anywhere you ever wanted, anything you ever dreamed", time: 21 },
  { text: "I can make your dreams come true", time: 26 },
  { text: "I'll be on my own, no crew", time: 29 },
  { text: "Out here makin' these moves", time: 32 },
  { text: "Singin' these big city blues", time: 35 },
  { text: "I don't wanna think about you", time: 39 },
  { text: "Every time I think about you", time: 40 },
  { text: "I swear I fall in love again", time: 46 },
  { text: "I remember everything you said", time: 49 },
  { text: "Promise me it's real", time: 52 },
  { text: "Girl, I got a deal", time: 55 },
  { text: "You could be my girl if I could be your world", time: 58 },
  { text: "Promise me it's real", time: 65 },
  { text: "Girl, I got a deal", time: 68 },
  { text: "You could be my girl if I could be your world", time: 71 },

  { text: "And I just wanna see you shine", time: 103 },
  { text: "Girl, you got stars for eyes", time: 106 },
  

  { text: "Baby, say you do", time: 126 },
  { text: "Uh, uh, uh, uh, uh", time: 128 },
  { text: "Maybe say you do", time: 132 },
  { text: "🤍 Te amo preciosa 🤍", time: 132 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);