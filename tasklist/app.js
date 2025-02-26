// Esperamos a que el DOM esté completamente cargado para asegurar que todos los elementos estén disponibles
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los elementos del DOM que vamos a manipular
    const newTaskInput = document.getElementById('newTask');
    const addTaskBtn   = document.getElementById('addTaskBtn');
    const taskList     = document.getElementById('taskList');
  
    // Función que se encarga de agregar una nueva tarea a la lista
    function addTask() {
      // Obtenemos el valor del input y eliminamos espacios extras
      const taskText = newTaskInput.value.trim();
      if (taskText === '') return; // Si el input está vacío, no hacemos nada
  
      // Creamos un nuevo elemento de lista (li) para la tarea
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Añadimos un listener para marcar la tarea como completada al hacer clic
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      // Creamos un botón para eliminar la tarea
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      // Listener para eliminar la tarea cuando se hace clic en el botón
      deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitamos que el clic en el botón active el evento del li
        taskList.removeChild(li);
      });
  
      // Agregamos el botón de eliminar al elemento li
      li.appendChild(deleteBtn);
      // Insertamos la tarea en la lista
      taskList.appendChild(li);
      // Limpiamos el campo de texto
      newTaskInput.value = '';
    }
  
    // Asignamos el evento 'click' al botón para agregar tareas
    addTaskBtn.addEventListener('click', addTask);
  
    // Permite agregar la tarea al presionar la tecla Enter
    newTaskInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  