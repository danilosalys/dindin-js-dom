let header = document.getElementsByTagName('header');

//console.log(header[0]);

header[0].style.backgroundColor = '#2E948A';


let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');

//console.log(linkCursos);
linkCursos.setAttribute('href','cursos.html');

document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós';

let titulo = document.querySelectorAll('.titulo h3')[1].innerHTML = 'Mais conteudo para você';

//console.log(titulo);

const lista = document.querySelectorAll('.titulo');
for (let i = 0; i < lista.length; i++) {
    lista[i].style.textTransform = 'uppercase';
};

let linkPost = document.querySelector('#todos_posts');
console.log(linkPost);

linkPost.setAttribute('href', 'blog.html');
