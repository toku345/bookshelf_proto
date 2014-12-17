(function() {
  var app;

  app = angular.module('bookshelf', ['bookshelf.controllers', 'bookshelf.services', 'bookshelf.filters', 'bookshelf.directives', 'ui.bootstrap', 'ngRoute', 'ngMessages']);

  app.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $routeProvider.when('/', {
        templateUrl: '../views/common/root.html',
        controller: 'rootCtrl'
      }).when('/login/', {
        templateUrl: '../views/common/login.html',
        controller: 'loginCtrl'
      }).when('/logout/', {
        templateUrl: '../views/common/logout.html',
        controller: 'logoutCtrl'
      }).when('/user/new/', {
        templateUrl: '../views/common/userRegistration.html',
        controller: 'userRegistrationCtrl'
      }).when('/book/', {
        templateUrl: '../views/common/bookList.html',
        controller: 'bookListCtrl'
      }).when('/book/:libraryId', {
        templateUrl: '../views/common/bookDetail.html',
        controller: 'bookDetailCtrl'
      }).when('/error/', {
        templateUrl: '../views/common/error.html'
      }).when('/home/', {
        templateUrl: '../views/client/home.html',
        controller: 'homeCtrl'
      }).when('/profile/:userId/', {
        templateUrl: '../views/client/profile.html',
        controller: 'profileCtrl'
      }).when('/profile/:userId/edit/', {
        templateUrl: '../views/client/home.html',
        controller: 'profileEditCtrl'
      }).when('/borrow/:bookId/', {
        templateUrl: '../views/common/borrow.html',
        controller: 'borrowCtrl'
      }).when('/rental/:userId/', {
        templateUrl: '../views/client/rentalList.html',
        controller: 'rentalListCtrl'
      }).when('/admin/', {
        templateUrl: '../views/admin/admin.html',
        controller: 'adminCtrl'
      }).when('/user/', {
        templateUrl: '../views/admin/userList.html',
        controller: 'userListCtrl'
      }).when('/user/:userId/', {
        templateUrl: '../views/admin/user.html',
        controller: 'userCtrl'
      }).when('/user/:userId/edit/', {
        templateUrl: '../views/admin/user.html',
        controller: 'userEditCtrl'
      }).when('/book/new/', {
        templateUrl: '../views/admin/book.html',
        controller: 'bookNewCtrl'
      }).when('/book/:bookId/edit/', {
        templateUrl: '../views/admin/book.html',
        controller: 'bookEditCtrl'
      }).when('/operation/', {
        templateUrl: '../views/admin/operation.html',
        controller: 'rentalOperationCtrl'
      }).otherwise({
        templateUrl: '../views/common/error.html'
      });
    }
  ]);

  app.run([
    '$rootScope', '$location', function($rootScope, $location) {
      return $rootScope.$on('$routeChangeStart', function() {
        var state, type;
        state = 'requireLogin';
        return type = 'user';
      });
    }
  ]);

}).call(this);
