'use strict';

//оболочка для скрипта, чтобы он отрабатывал после загрузки DOM элементов
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    //submit отправляет заполненную форму
    event.preventDefault(); // отключение стандартного поведения браузера

    let newFilm = addInput.value; //содержит то что ввел пользователь
    const favorite = checkbox.checked; //стот ли галочка в чеккбоксе

    //Условие, если введенное значение равно true, вудь если False то условие просто не сработает
    if (newFilm) {
      if (newFilm.length > 21) {
        //проверка введенного значения фильма, не больше ли 21 символа
        newFilm = `${newFilm.substring(0, 22)}...`; //substring вырезает часть строки  с 0 по 22 символ
      }

      if (favorite) {
        console.log('Добавляем любимый фильм'); //если галочка стоит на чекбоксе добавить в любимый фильм
      }

      movieDB.movies.push(newFilm); //добавляем в конец, название фильма, введенного пользователем
      sortArr(movieDB.movies); //ортировка по алфавиту
      createMovieList(movieDB.movies, movieList); //добавляет новый фильм в список и присваивает ему порядковый номер
    }

    event.target.reset(); //очистка поля формы
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove(); //удаляет каждый элемент класса (удаление рекламы)
    });
  };

  const makeChanges = () => {
    genre.textContent = 'драма'; //меняет текст на драма

    poster.style.backgroundImage = 'url("img/bg.jpg")'; //изменяет фон, внутри только двойные кавычки
  };

  const sortArr = (arr) => {
    arr.sort(); //сортирует содержимое массива movies по алфавиту
  };

  function createMovieList(films, parent) {
    parent.innerHTML = ''; //очищение элемента, т.е. удаление содержимого
    sortArr(films); //сортировка фильма

    films.forEach((film, i) => {
      //выводит на страницу отсортированный массив фильмов с указанием номера порядкового
      parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    //Удаление фильма при нажатии на корзинку
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove(); //удаление из родителя
        movieDB.movies.splice(i, 1); //удаление из массива по индексу
        createMovieList(films, parent); //вызываем функцию для того чтобы сохранить порядковые номера
      });
    });
  }

  //Список вызываемых функций
  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
