/**
 * Created by Mohammed on 1/1/2015.
 */

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
        $routeProvider.
            when('/',
            {
                templateUrl:'templates/country-list.html',
                controller:'CountryListController'
            })
            .when('/:id',
            {
                templateUrl:'templates/country-detail.html',
                controller:'CountryDetailController'
            })
            .when('/country',
            {
                templateUrl:'templates/country.html',
                controller:'CountryController'
            })
            .when('/country/newCountry',
            {
                templateUrl:'templates/new-country.html',
                controller:'NewCountryController'
            })
            .otherwise({
                redirectTo:  '/'
            });
    });


