///FUNCIONES///
const FUNCIONES = "Las funciones son bloques de codigo que ejecutan una accion especifica cuando el ente lo requiera."

function draw() {
    ctx.clearReact(0, 0, WIDTH, HEIGHT );
    for (let i = 0; i < 100; i++) {
        ctx.beginPth();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.arc(randon(WIDTH), random(HEIGHT), random(50), 0, 2*Math.PI);
        ctx.fill();
    }
}

draw();
