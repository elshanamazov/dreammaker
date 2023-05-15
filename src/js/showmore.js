(function () {
  const showMoreBtn = document.querySelector('.js-btn-more');
  const accordionList = document.querySelectorAll('.accordion__item');

  showMoreBtn.addEventListener('click', function () {
    accordionList.forEach(function (e) {
      e.classList.remove('_hidden');
      showMoreBtn.classList.add('_hidden');
    });
  });
})();
