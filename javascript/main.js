var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora web Jr.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Diseño ideas y las convierto en código.')
    .pauseFor(1500)
    .deleteChars(7)
    .typeString('<strong>realidad!</strong>')
    .pauseFor(2500)
    .start();