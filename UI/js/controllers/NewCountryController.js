/**
 * Created by Mohammed on 1/7/2015.
 */
app.controller('NewCountryController',function($scope,CountryService){

    $scope.save = function(country){
        CountryService.save(country);
    }

});