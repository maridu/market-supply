// Скрытие мобильного меню при клике на ссылку
var menuLinks = document.querySelectorAll('.header-nav__link');

for (var i = 0; i < menuLinks.length; i++) {
  var menuLink = menuLinks[i];
  var menuToggle = document.querySelector('#header-nav__toggle');
  menuLink.addEventListener('click', function() {
    menuToggle.checked = false;
  })
}

// Скрытие меню с основными категориями при клике на Categories
var categoriesLinks = document.querySelectorAll('.main-menu__link');

for (var i = 0; i < categoriesLinks.length; i++) {
  var categoriesLink = categoriesLinks[i];
  var categoriesToggle = document.querySelector('#main-menu__toggle');
  categoriesLink.addEventListener('click', function() {
    categoriesToggle.checked = false;
  })
}


$('.new__list').slick({
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    },
    
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.latest__list').slick({
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    },
    
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.featured__list').slick({
  rows: 2,
  slidesPerRow: 3,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        rows: 2,
        slidesPerRow: 2
      }
    },
    
    {
      breakpoint: 530,
      settings: {
        rows: 2,
        slidesPerRow: 1
      }
    }
  ]
});

$('.hot-deals__list').slick({
//  slidesToShow: 1
});

$('.special-deal__list').slick({
//  slidesToShow: 1
});