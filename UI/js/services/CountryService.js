app.factory('CountryService',function($http){
    return{

        list: function(callback){
            $http({
                method: 'GET',
                url: 'http://localhost:8013/Countries',
                cache: true
            }).success(callback);
        },
        find: function(id, callback){
            $http({
                method: 'GET',
                url: 'http://localhost:8013/Country/' + id,
                cache: true
            }).success(callback);
        },
        save:  function(country){
            $http({
                method: 'POST',
                url: 'http://localhost:8013/Country',
                data: country
            }).success(function (data, status) {
                    console.log("Data successful added");
                }

            );

        }

    };
});
