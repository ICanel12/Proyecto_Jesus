const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. 3a<sup>3</sup>-a<sup>2</sup>",
    respuestas: {
      a: "a<sup>2</sup>(3a+1)",
      b: "a<sup>2</sup>(3a-1)",
      c: "a(3a<sup>2</sup>-a)",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. 5m<sup>2</sup>+15m<sup>8</sup>",
    respuestas: {
      a: "Ninguna respuesta es correcta",
      b: "5m<sup>2</sup>(1-3m<sup>6</sup>)",
      c: "5m<sup>2</sup>(1+3m<sup>6</sup>)",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. x<sup>2</sup>y+x<sup>2</sup>z",
    respuestas: {
      a: "x<sup>2</sup>(y+z)",
      b: "x<sup>2</sup>(y-z)",
      c: "x(xy+xz)",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4. 8m<sup>2</sup>-12mn",
    respuestas: {
      a: "4m(2m-3)",
      b: "m(8m-12)",
      c: "Ninguna es correcta",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "5. 15c<sup>2</sup>d<sup>2</sup>+60c<sup>2</sup>d",
    respuestas: {
      a: "15c<sup>2</sup>d(d-4)",
      b: "15c<sup>2</sup>d(d+4)",
      c: "1c<sup>2</sup>d(d+4)",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "6. abc+abc<sup>2</sup>",
    respuestas: {
      a: "Ninguna es correcta",
      b: "abc(abc)",
      c: "abc(1+abc)",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "7. 18ax<sup>2</sup>+27a<sup>2</sup>y-81ay<sup>2</sup>",
    respuestas: {
      a: "9a(2x<sup>2</sup>+3ay+9y<sup>2</sup>)",
      b: "9a(2x<sup>2</sup>-3ay-9y<sup>2</sup>)",
      c: "9a(2x<sup>2</sup>+3ay-9y<sup>2</sup>)",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "8. 30a<sup>3</sup>x<sup>2</sup>y-60a<sup>2</sup>x<sup>3</sup>y<sup>2</sup>-90a<sup>2</sup>xy",
    respuestas: {
      a: "30a<sup>2</sup>xy(ax-2x<sup>2</sup>y-3)",
      b: "Ninguna es correcta",
      c: "30a<sup>2</sup>xy(ax+2x<sup>2</sup>y-3)",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "9. m(a-b)+(a-b)n",
    respuestas: {
      a: "(a-b)(m+n)",
      b: "(a+b)(m+n)",
      c: "(a-b)(m-n)",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. b(a+c)-(a+c)l",
    respuestas: {
      a: "(a-c)(a+l)",
      b: "(a+c)(a+l)",
      c: "Ninguna es correcta",
    },
    respuestaCorrecta: "c",
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