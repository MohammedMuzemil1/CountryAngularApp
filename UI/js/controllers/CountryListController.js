/**
 * Created by Mohammed on 1/7/2015.
 */
app.controller('CountryListController',function($scope,CountryService){

    CountryService.list(function(countries){
        $scope.Countries = countries.Countries;
    });

});