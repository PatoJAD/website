//============== isotope masonry js with imagesloaded
imagesLoaded( '#container', function() {
  var elem = document.querySelector('.grid');
  var iso = new Isotope(elem, {
    // options
    itemSelector: '.grid-item',
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
    }
  });

  var filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
  filterButtons.forEach(e =>
    e.addEventListener('click', () => {

      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({
          filter: filterValue
      });
    })
  );
});
