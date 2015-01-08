/**
 * Created by Mohammed on 1/7/2015.
 */
app.controller('CountryDetailController',function($scope,$routeParams,CountryService){

    CountryService.find($routeParams.id,function(country){
        $scope.country = country.Country;
    });

});