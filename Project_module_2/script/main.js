angular.module("ProjectApp", ["duScroll", "ngRoute", "ngCookies"])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 102)
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index.html'
            })
            .when('/:id', {
                templateUrl: 'template/article.html',
                controller: 'NewsController'
            })
            .otherwise ({
                redirectTo:'/'
            });
        $locationProvider.html5Mode(true);
    })
    .controller("NavigationController", function($scope){
        $scope.menu = [{id: 'header', title: 'HOME'},
            {id: 'services', title: 'SERVICES'},
            {id: 'portfolio', title: 'PORTFOLIO'},
            {id: 'team', title: 'TEAM'},
            {id: 'news', title: 'NEWS'},
            {id: 'feedback', title: 'CONTACT'}]
    })
    .controller("ServiceController", function($scope) {
        var services = document.querySelectorAll('.services_container div.service');
        var squares = document.querySelectorAll('.point-square>li');
        squares[0].style.left = 0;
        squares[squares.length - 1].style.right = 0;
        for (var i = 1; i<squares.length-1; i++) {
            squares[i].style.left = services[i].getBoundingClientRect().left - services[0].getBoundingClientRect().left + (services[i].getBoundingClientRect().right - services[i].getBoundingClientRect().left)/2-35-118+'px';
        }
        $scope.active_service = 1;
        $scope.changeActiveService = function(i) {
            $scope.active_service = i;
        }


    })
    .controller ("PhotoController", function($scope) {
        $scope.show_mask = false;
        $scope.portfolio = [{src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'ALL'}, {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'WEB'},
            {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'PHOTOGRAPHY'}, {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'GRAPHIC DESIGN'},
            {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'ALL'}, {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'WEB'},
            {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'PHOTOGRAPHY'}, {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'GRAPHIC DESIGN'},
            {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'PHOTOGRAPHY'}, {src: 'https://i.kinja-img.com/gawker-media/image/upload/vjamorotezzukhdvpccc.JPG', category: 'GRAPHIC DESIGN'}];
        $scope.filter_value = 'ALL';
        $scope.setFilter = function(value) {
            $scope.filter_value = value;
        };
        $scope.filterFunc = function (photo) {
            if ($scope.filter_value == 'ALL') {
                return photo;
            } else {
                if (photo.category == $scope.filter_value) {
                    return photo;
                }
            }
        }
    })
    .controller("ProudNumbersController", function($scope) {
        $scope.items = [{icon: 'img/case.png', max: '3054', title: 'COMPLETED PROJECTS'},
            {icon: 'img/mouse.png', max: '7234873', title: 'CLICK PRESSED'},
            {icon: 'img/letter.png', max: '4670', title: 'MAILS SENTED & RECIEVED'},
            {icon: 'img/comment.png', max: '939', title: 'JOKES TOLDS'}];
    })
    .controller ("TeamController", function($scope) {
        $scope.team = [{name: 'JOHN DOE', position: 'ART DIRECTOR', desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {name: 'JOHN DOE', position: 'WEB DEVELOPER', desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {name: 'JOHN DOE', position: 'PHOTOGRAPHER', desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {name: 'JOHN DOE', position: 'GRAPHIC DESIGNER', desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}]
    })
    .controller ("NewsController", function($scope, $http, $routeParams) {
        $http({
            method: 'GET',
            url: 'files/data.json'
        }).then(function successHandler(response)
        {
            $scope.news = response.data;
        }, function errorHandler(response)
        {
            console.log('Error: ' + response.statusText);
        });
        $scope.filterDate = function(article) {
            article.date = new Date(article.date);
            return article;
        };
        $scope.id = $routeParams.id;
        $scope.filterArticle = function(article) {
            if (article.id == $scope.id) {
                return article;
            }
        }
    })
    .controller("FeedbackController", function($scope, setCookieService) {
        $scope.nameRegex = /^[a-zA-Z]+$/;
        $scope.messageRegex = /^.{20}/;
        $scope.user = {};
        $scope.user.username = setCookieService.get('form_username');
        $scope.user.email = setCookieService.get('form_email');
        $scope.saveValues = function() {
            if (angular.isDefined($scope.user.username) && angular.isDefined($scope.user.email)) {
                setCookieService.set('form_username', $scope.user.username);
                setCookieService.set('form_email', $scope.user.email);
            }
        }
    })
    .factory("setCookieService", function($cookies) {
        return {
            set: function (id, value) {
                var now = new Date();
                var exp = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
                $cookies.put(id, value, {expires: exp});
            },
            get: function(id) {
                return $cookies.get(id);
            }
        }
    })
    .directive ("smoothCounter", function($window, $interval) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attr) {
                scope.number = 0;
                var getProudNumbers = function() {
                    var cycle_step = 100;
                    var counter = function me() {
                        if(scope.number < me.max_value - (me.max_value % (3000/cycle_step))) {
                            me.element.text(scope.number);
                            scope.number = scope.number+Math.round(me.max_value/(3000/cycle_step));
                        } else {
                            me.element.text(me.max_value);
                            $interval.cancel(me.start_counter);
                        }
                    };
                    counter.start_counter = $interval(counter, cycle_step);
                    counter.max_value = attr.smoothCounter;
                    counter.element = element;
                };

                $window.addEventListener("scroll", function() {
                    if(document.getElementById('proud_numbers')) {
                        if ($window.pageYOffset > document.getElementById('proud_numbers').getBoundingClientRect().top + $window.pageYOffset - 300 && $window.pageYOffset < document.getElementById('proud_numbers').getBoundingClientRect().top + $window.pageYOffset + 100) {
                            getProudNumbers();
                        }
                    }
                });
            }
        }
    })
    .directive("teamInfo", function() {
        return {
            restrict: 'E',
            templateUrl: 'template/team_member.html',
            scope: {team: '='},
            replace: true
        }
    })