const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Resuelve por igualación:<p>5x - 2y = 2</p><p>x + 2y = 2</p>",
    respuestas: {
      a: "<p>x = 3/2</p><p>y = 2/3</p>",
      b: "<p>x = 2/3</p><p>y = 2/3</p>",
      c: "<p>x = 3</p><p>y = 3</p>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Resuelve por igualación:<p>2x + 3y = 2</p><p>-6x + 12y = 1</p>",
    respuestas: {
      a: "<p>x = 3</p><p>y = 2</p>",
      b: "<p>x = 1</p><p>y = 3</p>",
      c: "<p>x = 1/3</p><p>y = 1/2</p>",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Resuelve por igualación:<p>5x + 2y = 11</p><p>2x -3y = 12</p>",
    respuestas: {
      a: "<p>x = 3</p><p>y = -2</p>",
      b: "<p>x = -3</p><p>y = 2</p>",
      c: "<p>x = 3</p><p>y = 1</p>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4. Resuelve por reducción:<p>5x - y = 3</p><p>-2x + 4y = 12</p>",
    respuestas: {
      a: "<p>x = 0</p><p>y = -3</p>",
      b: "<p>x = 1</p><p>y = -3/2</p>",
      c: "<p>x = 0</p><p>y = 0</p>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Resuelve por reducción:<p>2x + y = 6</p><p>4x + 3y = 14</p>",
    respuestas: {
      a: "<p>x = 2</p><p>y = 2</p>",
      b: "<p>x = -2</p><p>y = -2</p>",
      c: "<p>x = 1</p><p>y = 3</p>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "6. Resuelve por reducción:<p>-2x + 4y = 6</p><p>3x - 5y = 2</p>",
    respuestas: {
      a: "<p>x = 19</p><p>y = -11</p>",
      b: "<p>x = 19</p><p>y = 11</p>",
      c: "<p>x = 10</p><p>y = 11</p>",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "7. Resuelve por sustitución:<p>3x + 5y = 15</p><p>2x - 3y = -9</p>",
    respuestas: {
      a: "<p>x = 0</p><p>y = 3</p>",
      b: "<p>x = 1/2</p><p>y = 3</p>",
      c: "<p>x = 2</p><p>y = 5</p>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "8. Resuelve por sustitución:<p>2x  + 3y = 1</p><p>3x + 2y = 4</p>",
    respuestas: {
      a: "<p>x = 2</p><p>y = -1</p>",
      b: "<p>x = 1/2</p><p>y = -1/2</p>",
      c: "<p>x = -2</p><p>y = -1</p>",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "9. Resuelve por sustitución:<p>2x + 2y = 1</p><p>-3x + 3y = 5</p>",
    respuestas: {
      a: "<p>x = -12/12</p><p>y = 13/12</p>",
      b: "<p>x = -7/12</p><p>y = 13/12</p>",
      c: "<p>x = -7/8</p><p>y = 13/8</p>",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
        </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);