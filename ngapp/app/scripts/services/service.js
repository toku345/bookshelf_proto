(function() {
  var service;

  service = angular.module('bookshelf.services', ['ngResource']);


  /*
   * 共有オブジェクト
   */

  service.service('sharedStateService', [
    function() {
      return {
        type: '',
        userId: ''
      };
    }
  ]);


  /*
   * 借り物かご
   */

  service.service('basketService', [
    function() {
      return {
        books: {}
      };
    }
  ]);


  /*
   * ユーザーリソース
   */

  service.factory('userService', [
    '$resource', function($resource) {
      var resource;
      resource = $resource('/api/client/:id', {
        id: '@userId'
      });
      return resource;
    }
  ]);


  /*
   * ユーザー一覧
   */

  service.factory('userListService', [
    'userService', function(userService) {
      return userService.query();
    }
  ]);


  /*
   * 書籍一覧
   */

  service.factory('bookListService', [
    '$resource', function($resource) {
      var resource;
      return resource = $resource('/api/book/');
    }
  ]);

}).call(this);
