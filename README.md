# Challenge_Alura
# Amigo Secreto 

Este proyecto es una aplicación sencilla en JavaScript para gestionar una lista de amigos y sortear un "Amigo Secreto".

## ¿Cómo funciona?
- Agrega amigos a la lista escribiendo sus nombres y presionando "Agregar".
- Puedes eliminar amigos de la lista con el botón "X".
- Presiona "Sortear" para seleccionar un amigo secreto al azar.

## Tecnologías utilizadas
- HTML
- CSS
- JavaScript (DOM Manipulation)

## Código Principal
```js
document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        if (nombre === "" || amigos.includes(nombre)) return;
        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.onclick = function () {
                amigos.splice(index, 1);
                actualizarLista();
            };
            li.appendChild(btnEliminar);
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) return;
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></p>`;
    };
});
