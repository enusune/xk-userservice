jQuery(function () {
  var options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0.4],
  };
  var pageIo = new IntersectionObserver((entries) => {
    entries.forEach(function (entry) {
      if (entry.target.className.indexOf('page-first') > -1) {
        return;
      }
      var $element = $(entry.target);
      if (entry.isIntersecting) {
        $element.addClass('page-active');
      } else {
        $element.removeClass('page-active');
      }
    });
  }, options);
  $('.page').each(function (index, el) {
    pageIo.observe(el);
  });
  var picIo = new IntersectionObserver(
    (entries) => {
      entries.forEach(function (entry) {
        var $element = $(entry.target);
        if (entry.isIntersecting) {
          $element.addClass('pic-slide-right');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0],
    },
  );
  $('.pic').each(function (index, el) {
    picIo.observe(el);
  });
});
