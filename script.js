const titulo = document.querySelector('header') ;
titulo.id = 'titulo_id' ;
titulo.insertAdjacentHTML('afterbegin', '<h1> Título </h1>');

const main_div = document.querySelector('main') ;
main_div.id = 'main_div_id' ;
main_div.insertAdjacentHTML('afterbegin', '<div></div>') ;
const criar_h2 = document.createElement('h2') ;
const subtitulo_1 = document.createTextNode('Subtítulo 1') ;
criar_h2.appendChild(subtitulo_1) ;
const criar_p = document.createElement('p') ;
const paragrafo_1 = document.createTextNode('Parágrafo 1') ;
criar_p.appendChild(paragrafo_1) ;

main_div.appendChild(criar_h2) ;
main_div.appendChild(criar_p) ;

const main_div2 = document.querySelector('main') ;
main_div2.id = 'main_div2_id' ;
main_div2.insertAdjacentHTML('afterbegin', '<div></div>') ;
const criar_h2_2 = document.createElement('h2') ;
const subtitulo_2 = document.createTextNode('Subtítulo 2') ;
criar_h2_2.appendChild(subtitulo_2) ;
const criar_p2 = document.createElement('p') ;
const paragrafo_2 = document.createTextNode('Parágrafo 2') ;
criar_p2.appendChild(paragrafo_2) ;

main_div2.appendChild(criar_h2_2) ;
main_div2.appendChild(criar_p2) ;