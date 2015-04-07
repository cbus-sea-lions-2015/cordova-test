// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new MovieService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByTitle);
    $('.help-btn').on('click', function() {
        alert("Movie Search v3.4");
    });

    document.addEventListener('deviceready', function () {
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByTitle() {
        service.findByTitle($('.search-key').val()).done(function (movie) {
            $('.movie-list').empty();

            if(movie.Title) {
              $('.movie-list').append('<li><a href="#movies/' + movie.imdbID + '">' + movie.Title + ' ' + movie.Year + '</a></li>');
            }
        });
    }

}());
