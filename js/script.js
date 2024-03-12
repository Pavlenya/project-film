'use strict';

const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
};

const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => {
  item.remove(); //удаляет каждый элемент класса
});

genre.textContent = 'драма'; //меняет текст на драма

poster.style.backgroundImage = 'url("img/bg.jpg")'; //изменяет фон, внутри только двойные кавычки

movieList.innerHTML = ''; //очищение элемента, т.е. удаление содержимого

movieDB.movies.sort(); //сортирует содержимое массива movies по алфавиту

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
