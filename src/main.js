// Mostrar datos almacenados en Local Storage
function displayData() {
  const name = localStorage.getItem("userName");
  const age = localStorage.getItem("userAge");
  const outputDiv = document.getElementById("output");

  if (name && age) {
    outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
  } else {
    outputDiv.textContent = "No hay datos almacenados.";
  }
}

// Contador de interacciones usando Session Storage
function updateInteractionCount() {
  let count = parseInt(sessionStorage.getItem("interactionCount")) || 0;
  count++;
  sessionStorage.setItem("interactionCount", count);

  const interactionDiv = document.getElementById("interactionCount");
  interactionDiv.textContent = `Interacciones en esta sesión: ${count}`;
}

// Guardar datos en Local Storage al hacer clic
document.getElementById("saveButton").addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name && !isNaN(age)) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);
    displayData();
  } else {
    alert("Por favor, ingresa un nombre válido y una edad numérica.");
  }
});

// Limpiar datos almacenados
document.getElementById("clearButton").addEventListener("click", () => {
  localStorage.clear();
  displayData();
});

// Contar interacciones cuando se hace clic en guardar o limpiar
document.getElementById("saveButton").addEventListener("click", updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", updateInteractionCount);

// Inicializar contador si no existe
if (!sessionStorage.getItem("interactionCount")) {
  sessionStorage.setItem("interactionCount", 0);
}

// Mostrar datos y contador al cargar la página
window.onload = () => {
  displayData();
  updateInteractionCount();
};
