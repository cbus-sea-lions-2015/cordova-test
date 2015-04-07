var MovieService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://www.omdbapi.com/";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "?i=" + id});
    }

    this.findByTitle = function(searchKey) {
        var searchURL = url + "?t=" + searchKey;
        return $.ajax({url: searchURL});
    }


}
frozen
