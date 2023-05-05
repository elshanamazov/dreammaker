(function () {
  const burger = document.querySelector('.js-burger');
  const menu = document.querySelector('.js-nav');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('burger--active')) {
      menu.classList.add('nav--active');
      burger.classList.add('burger--active');
      body.classList.add('_lock');
    } else {
      menu.classList.remove('nav--active');
      burger.classList.remove('burger--active');
      body.classList.remove('_lock');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('nav--active');
      burger.classList.remove('burger--active');
      body.classList.remove('locked');
    }
  });

  menu.addEventListener('click', () => {
    if (menu.classList.contains('_active')) {
      menu.classList.remove('_active');
      burger.classList.remove('active');
      body.classList.remove('_lock');
    }
  });
})();
