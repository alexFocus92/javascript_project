// Variables para el tiempo
let minutes = 0,
  seconds = 0,
  milliseconds = 0;
let interval;

// Referencias a los elementos del DOM
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const lapsEl = document.getElementById('laps');

// Referencias a los botones
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

// Función para actualizar la visualización del tiempo
function updateDisplay() {
  minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  millisecondsEl.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}

// Función que inicia el cronómetro
function startTimer() {
  // Evita múltiples intervalos si el cronómetro ya está en marcha
  if (interval) return;
  interval = setInterval(() => {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10); // Actualizamos cada 10 milisegundos (centésimas de segundo)
}

// Función para pausar el cronómetro
function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

// Función para reiniciar el cronómetro y limpiar las vueltas
function resetTimer() {
  pauseTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapsEl.innerHTML = '';
}

// Función para registrar una vuelta (lap)
function recordLap() {
  const lapItem = document.createElement('li');
  lapItem.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  lapsEl.appendChild(lapItem);
}

// Asignación de eventos a los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
