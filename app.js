// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    // Función para agregar un amigo a la lista
    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        // Agregar el nombre a la lista si no está repetido
        if (amigos.includes(nombre)) {
            alert("Ese nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = ""; // Limpiar el input
    };

    // Función para actualizar la lista en la pantalla
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            
            // Agregar botón para eliminar nombres
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.style.marginLeft = "10px";
            btnEliminar.style.cursor = "pointer";
            btnEliminar.onclick = function () {
                amigos.splice(index, 1);
                actualizarLista();
            };

            li.appendChild(btnEliminar);
            listaAmigos.appendChild(li);
        });
    }

    // Función para sortear un amigo secreto
    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Agregue al menos un nombre antes de sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
    };
});
