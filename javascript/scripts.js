//tema oscuro/claro

const temaPreferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setearTema = tema => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('theme', tema);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setearTema(switchToTheme);
});

setearTema(localStorage.getItem('theme') || temaPreferido);

//boton contactame ancla a seccion contacto

document.getElementById("boton_contactame").addEventListener("click", function() {
  document.querySelector('#fila-contacto').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

//escritura progresiva de las estadisticas de clubes

  let textos = [
    "Partidos: 778\nGoles: 672\nTítulos: 35",
    "Partidos: 56\nGoles: 24\nTítulos: 2",
    "Partidos: 172\nGoles: 98\nTítulos: 3"
  ];

  let textoProgresivos = document.querySelectorAll(".estadisticas");

  textoProgresivos.forEach(function(textoProgresivo, index) {
    let i = 0;
    let texto = textos[index];

    function escribirTexto() {
        if (i < texto.length) {
          textoProgresivo.innerHTML += texto.charAt(i) === '\n' ? '<br>' : texto.charAt(i);
          i++;
          setTimeout(escribirTexto, 100);
        } else {
          i = 0;
          setTimeout(function() {
            textoProgresivo.innerHTML = "";
            escribirTexto();
          }, 5000);
        }
      }

    escribirTexto();
  });
