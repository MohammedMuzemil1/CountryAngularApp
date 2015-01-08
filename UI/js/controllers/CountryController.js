/**
 * Created by Mohammed on 1/4/2015.
 */

app.controller('CountryController',function ($scope,$http) {

    $http.get('http://localhost:1090/Countries')
        .success(function(data,status,headers,config){
            $scope.Countries = data.Countries;
        }).error(function(data,status,headers,config){

        });
       console.log($scope.Countries);

});