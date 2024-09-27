const blockedUsers = JSON.parse(localStorage.getItem('blockedUsers')) || [];

// Función para bloquear un usuario

function blockUser(userId) {

    if (!blockedUsers.includes(userId)) {

        blockedUsers.push(userId);

        localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers));

        alert(`Usuario ${userId} bloqueado.`);

    }

}

// Función para verificar si un usuario está bloqueado

function isUserBlocked(userId) {

    return blockedUsers.includes(userId);

}

// Ejemplo de cómo usar estas funciones

function initiateCallToUser(userId) {

    if (isUserBlocked(userId)) {

        alert(`No puedes llamar al usuario ${userId} porque está bloqueado.`);

        return;

    }

    // Código para iniciar la llamada al usuario

}

// Botón para bloquear usuario (aquí deberías proporcionar un método para ingresar el ID del usuario)

const blockButton = document.getElementById('blockButton');

blockButton.addEventListener('click', () => {

    const userId = prompt('Ingrese el ID del usuario a bloquear:');

    blockUser(userId);

});


document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("config-modal");
    var btn = document.getElementById("config-btn");
    var span = document.getElementsByClassName("close")[0];
    var saveBtn = document.getElementById("save-btn");
    var profilePic = document.getElementById("profile-pic");
    var profileInput = document.getElementById("profile-input");

    // Mostrar el modal al hacer clic en el botón de configuración
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Cerrar el modal al hacer clic en el botón "X"
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Guardar la nueva imagen de perfil
    saveBtn.onclick = function () {
        var file = profileInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        modal.style.display = "none";  // Cerrar el modal después de guardar
    }
});

