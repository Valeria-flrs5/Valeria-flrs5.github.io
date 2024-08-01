//console.log("Hola Mundo desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {loop: true});

typewriter.typeString('<h2>Est. Ing.Sistemas Computacionales | Desarrolladora Front-end Jr<h2>')
    .pauseFor(2500)
    .deleteAll()
    .start();