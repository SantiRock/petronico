import { vertexCode } from "../vertex_shaders/vertex_shader1.js";
import { fragmentCode } from "../fragment_shaders/fragment_shader1.js";
import { time } from "../variables/time.js";

// Canvas and WebGL context

const canvas = document.getElementById('canvas_01');
const gl = canvas.getContext('experimental-webgl');


// Define geometry and store it in buffer objects

const vertices = [
    -1, 1., 0.,
    -1, -1., 0.,
    1., -1, 0.,
    1, 1., 0.
];

const indices = [3, 2, 1, 3, 1, 0];

const vertex_buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER, null);

const index_buffer = gl.createBuffer();

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

// Create and compile Shader programs

const vertCode = vertexCode;

const vertShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertShader, vertCode);

gl.compileShader(vertShader);

const fragCode = fragmentCode;

const fragShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragShader, fragCode);

gl.compileShader(fragShader);

const shaderProgram = gl.createProgram();

gl.attachShader(shaderProgram, vertShader);

gl.attachShader(shaderProgram, fragShader);

gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram); 

// Associate the shader programs to buffer objects

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

const coord = gl.getAttribLocation(shaderProgram, "a_coordinates");

const u_time = gl.getUniformLocation(shaderProgram, 'u_time');


gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

gl.enableVertexAttribArray(coord);

// Drawing the object

const starTime = Date.now();
//time(gl, u_time, starTime);


/*
function timee(gl) {
    function animate() {
        // Calcular el tiempo transcurrido
        let currentTime = Date.now();
        let elapsedTime = (currentTime - starTime) / 1000; // Tiempo en segundos

        // Pasar el tiempo al shader
        gl.uniform1f(u_time, elapsedTime);

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

timee();
*/


gl.clearColor(0., 0., 0., 1.);

gl.enable(gl.DEPTH_TEST);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.viewport(0, 0, canvas.width, canvas.height);

gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);



