

// console.log(document.body)
// console.log(document.title)

const tituloHTML   = document.querySelector('h1');
const cuadradoHTML = document.querySelector('.cuadrado');
const btnRojo      = document.querySelectorAll('.btn')[0];
const btnVerde     = document.querySelectorAll('.btn')[1];
const btnAzul      = document.querySelectorAll('.btn')[2];
const btnReset     = document.querySelectorAll('.btn')[3];

btnRojo.addEventListener('click', () => {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado');
   cuadradoHTML.classList.add('rojo');
   tituloHTML.textContent = 'Cuadrado Rojo'
})

btnVerde.addEventListener('click', ()=> {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado');
   cuadradoHTML.classList.add('verde');
   tituloHTML.textContent = 'Cuadrado Verde'
})

btnAzul.addEventListener('click', ()=> {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado');
   cuadradoHTML.classList.add('azul');
   tituloHTML.textContent = 'Cuadrado Azul'
})

cuadradoHTML.addEventListener('click', ()=> {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado');
   tituloHTML.textContent = 'Jugando con JS'
})
