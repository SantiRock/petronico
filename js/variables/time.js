/*
export function time(gl, timeLocation, startTime) {
    function animate() {
        let currentTime = Date.now();
        let elapsedTime = (currentTime - startTime) / 1000; // Tiempo en segundos

        // Enviar el tiempo al shader
        gl.uniform1f(timeLocation, elapsedTime);

        // Renderizar la escena
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // Continuar el bucle de renderizado
        requestAnimationFrame(animate);
    }

    animate();
}*/
const canvas = document.getElementById('canvas_01');


export function time(gl, timeLocation, startTime) {
    function animate() {
        // Calcular el tiempo transcurrido
        let currentTime = Date.now();
        let elapsedTime = (currentTime - startTime) / 1000; // Tiempo en segundos

        // Pasar el tiempo al shader
        gl.uniform1f(timeLocation, elapsedTime);

        // Limpiar el búfer de color y de profundidad
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Establece el color de fondo (negro)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Limpia el color y el búfer de profundidad

        // Configurar el viewport (ventana de visualización)
        gl.viewport(0, 0, canvas.width, canvas.height);

        // Dibujar el objeto
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer); // Vincular el búfer de índices si usas gl.drawElements
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0); // Dibujar el objeto usando los índices

        // O si no estás usando índices, podrías usar gl.drawArrays:
        // gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

        // Continuar el ciclo de renderizado para animación
        requestAnimationFrame(animate);
    }

    animate();
}
