(function() {
  var controller;

  controller = angular.module('bookshelf.controllers', ['bookshelf.services']);


  /*
   * ナビコントローラ
   */

  controller.controller('navCtrl', [
    '$scope', function($scope) {
      $scope.nav = {
        home: true,
        rental: true,
        book: true,
        userNew: true,
        logout: true,
        admin: true,
        users: true
      };
      $scope.userId = 1;
      return $scope.$on('navChange', function(event, state, type) {
        switch (state) {
          case 'requireLogin':
            $scope.nav.home = false;
            $scope.nav.rental = false;
            $scope.nav.book = false;
            $scope.nav.home = false;
            $scope.nav.logout = false;
            $scope.nav.users = false;
            return $scope.nav.userNew = true;
          case 'LoggedIn':
            $scope.nav.home = true;
            $scope.nav.book = true;
            $scope.nav.userNew = false;
            $scope.nav.logout = true;
            if (type === 'user') {
              $scope.nav.rental = true;
              $scope.nav.users = false;
              return $scope.nav.admin = false;
            } else {
              $scope.nav.rental = false;
              $scope.nav.users = true;
              return $scope.nav.admin = true;
            }
            break;
        }
      });
    }
  ]);


  /* 共通 */


  /*
   * ルートコントローラ
   */

  controller.controller('rootCtrl', [
    '$location', function($location) {
      return $location.path('/login/');
    }
  ]);


  /*
   * ログインコントローラ
   */

  controller.controller('loginCtrl', [
    '$scope', '$location', '$http', function($scope, $location, $http) {
      $scope.title = 'ログイン';
      $scope.user = {
        name: '',
        password: '',
        remember: false
      };
      return $scope.login = function() {

        /*
        			$http
        				method: 'POST'
        				url: '/api/login'
        				data: $scope.user
         */
        return $location.path('/home/');
      };
    }
  ]);


  /*
   * ログアウトコントローラ
   */

  controller.controller('logoutCtrl', [
    '$scope', '$timeout', '$location', function($scope, $timeout, $location) {
      $scope.title = 'ログアウトしました';
      return $timeout(function() {
        return $location.path('/login/');
      }, 100, true);
    }
  ]);


  /*
   * ユーザー登録コントローラ
   */

  controller.controller('userRegistrationCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.title = 'ユーザー登録';
      $scope.user = {
        name: '',
        password: '',
        email: ''
      };
      $scope.register = function() {
        return console.log($scope.user);
      };
      return $scope.cancel = function() {
        return $location.path('/login/');
      };
    }
  ]);


  /*
   * 書籍一覧コントローラ
   */

  controller.controller('bookListCtrl', [
    '$scope', 'basketService', function($scope, basketService) {
      $scope.title = '書籍一覧';
      $scope.basket = basketService.books;
      return $scope.bookList = [
        {
          libraryId: 1,
          bookId: 1,
          name: 'Book1',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 2,
          bookId: 2,
          name: 'Book2',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 3,
          bookId: 3,
          name: 'Book3',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 4,
          bookId: 4,
          name: 'Book4',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 5,
          bookId: 5,
          name: 'Book5',
          author: 'hoge1',
          state: 1
        }, {
          libraryId: 6,
          bookId: 6,
          name: 'Book6',
          author: 'hoge1',
          state: 1
        }, {
          libraryId: 7,
          bookId: 7,
          name: 'Book7',
          author: 'hoge1',
          state: 2
        }, {
          libraryId: 8,
          bookId: 8,
          name: 'Book8',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 9,
          bookId: 9,
          name: 'Book9',
          author: 'hoge1',
          state: 0
        }, {
          libraryId: 10,
          bookId: 10,
          name: 'Book10',
          author: 'hoge1',
          state: 0
        }
      ];
    }
  ]);


  /*
   * 書籍詳細コントローラ
   */

  controller.controller('bookDetailCtrl', [
    '$scope', '$routeParams', '$location', 'basketService', function($scope, $routeParams, $location, basketService) {
      $scope.title = '書籍詳細';
      $scope.book = {
        libraryId: $routeParams.libraryId,
        bookId: 1,
        name: 'Book1',
        author: 'hoge1',
        state: 0
      };
      $scope.canBorrow = function() {
        return $scope.book.state === 0 && basketService.books[$scope.book.libraryId] !== true;
      };
      $scope.addBasket = function() {
        basketService.books[$scope.book.libraryId] = true;
        return $location.path('/book/');
      };
      $scope.popBasket = function() {
        basketService.books[$scope.book.libraryId] = false;
        return $location.path('/book/');
      };
      return $scope.backToList = function() {
        return $location.path('/book/');
      };
    }
  ]);


  /* 利用者 */


  /*
   * ホームコントローラ
   */

  controller.controller('homeCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'ホーム';
    }
  ]);


  /*
   * プロフィール確認コントローラ
   */

  controller.controller('ProfileCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'プロフィール確認';
    }
  ]);


  /*
   * プロフィール編集コントローラ
   */

  controller.controller('ProfileEditCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'プロフィール編集';
    }
  ]);


  /*
   * 貸出コントローラ
   */

  controller.controller('borrowCtrl', [
    '$scope', function($scope) {
      return $scope.title = '貸出';
    }
  ]);


  /*
   * 借用中・履歴一覧・返却コントローラ
   */

  controller.controller('rentalListCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'レンタルリスト';
    }
  ]);


  /* 管理者ホーム */

  controller.controller('adminCtrl', [
    '$scope', function($scope) {
      return $scope.title = '管理者ホーム';
    }
  ]);


  /*
   * ユーザー一覧コントローラ
   */

  controller.controller('userListCtrl', [
    '$scope', function($scope) {
      $scope.title = 'ユーザー一覧';
      return $scope.userList = [
        {
          userId: 1,
          name: 'Nanashi1',
          createdTime: '2014-01-01',
          memo: 'memo1'
        }, {
          userId: 2,
          name: 'Nanashi2',
          createdTime: '2014-01-02',
          memo: 'memo2'
        }, {
          userId: 3,
          name: 'Nanashi3',
          createdTime: '2014-01-03',
          memo: 'memo3'
        }, {
          userId: 4,
          name: 'Nanashi4',
          createdTime: '2014-01-04',
          memo: 'memo4'
        }
      ];
    }
  ]);


  /*
   * ユーザー詳細コントローラ
   */

  controller.controller('userCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'ユーザー詳細';
    }
  ]);


  /*
   * ユーザー編集コントローラ
   */

  controller.controller('userEditCtrl', [
    '$scope', function($scope) {
      return $scope.title = 'ユーザー編集';
    }
  ]);


  /*
   * 貸出コントローラ
   */

  controller.controller('rentalCtrl', [
    '$scope', function($scope) {
      return $scope.title = '貸出';
    }
  ]);


  /*
   * 書籍登録コントローラ
   */

  controller.controller('bookNewCtrl', [
    '$scope', function($scope) {
      return $scope.title = '書籍登録';
    }
  ]);


  /*
   * 書籍編集コントローラ
   */

  controller.controller('bookEditCtrl', [
    '$scope', function($scope) {
      return $scope.title = '書籍編集';
    }
  ]);


  /*
   * 貸借操作コントローラ
   */

  controller.controller('rentalOperationCtrl', [
    '$scope', function($scope) {
      return $scope.title = '貸借操作';
    }
  ]);

}).call(this);
