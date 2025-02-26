// Selecciona el elemento donde se muestra el contador
const value = document.getElementById('value');
// Selecciona todos los botones
const btns = document.querySelectorAll('.btn');

let count = 0;

// Agrega un listener para cada botón
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // Verifica qué botón fue presionado basándose en su clase
    if (e.currentTarget.classList.contains('decrease')) {
      count--;
    } else if (e.currentTarget.classList.contains('reset')) {
      count = 0;
    } else if (e.currentTarget.classList.contains('increase')) {
      count++;
    } else if (e.currentTarget.classList.contains('random'))
      count = Math.floor(Math.random() * 100);
    // Actualiza el contenido del span con el nuevo valor
    value.textContent = count;
  });
});
