// Obtener el modal
var modal = document.getElementById("profileModal");

// Obtener los botones "More information"
var moreInfoButtons = document.querySelectorAll(".more-info-btn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Abrir el modal y cargar los datos correspondientes
moreInfoButtons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";

        // Cambiar dinámicamente los datos del perfil
        document.getElementById('profileName').textContent = this.dataset.name;
        document.getElementById('profileRole').textContent = this.dataset.role;
        document.getElementById('profileImage').src = this.dataset.image;
        document.getElementById('profileDescription').textContent = this.dataset.description;
    }
});

// Cerrar el modal cuando se hace clic en la "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
