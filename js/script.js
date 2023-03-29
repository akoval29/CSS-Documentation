"use strict";

// цей скріпт продивляється весь код на предмет div, в яких є id
// (впринципі існує id). Потім він генерує елементи з тегом <a>, 
// яким присвоює href із value (getAttribute) тих id, які він знайшов, 
// це для прокрутки до самих елементів. Ну і звук кліка на <a>
// enjoy !!!!!!

const clickSound = new Audio('src/bup.ogg'); // muz
const divs = document.querySelectorAll('[id]'); // знаходимо ВСІ div, які мають id
const navEl = document.querySelector('.page__1'); // знаходимо секцію куди будем генерувати <a>
for (let i = 0; i < divs.length; i++) {
  const id = divs[i].getAttribute('id'); // забираєм attribute

  const a = document.createElement('a');
  a.setAttribute('href', `#${id}`); // вставляєм attribute в href
  a.textContent = `Display: ${id}`;

  a.addEventListener("click", () => { // накидуєм звук кліка
    clickSound.currentTime = 0;
    clickSound.play();
  });

  navEl.appendChild(a);
}