(function() {
  var filter;

  filter = angular.module('bookshelf.filters', []);


  /*
   * 蔵書状態フィルター
   */

  filter.filter('bookState', function() {
    return function(input) {
      if (input == null) {
        return '不明';
      }
      switch (input) {
        case 0:
          return '貸出可';
        case 1:
          return '貸出中';
        case 2:
          return '利用不可';
      }
    };
  });


  /*
   * 蔵書状態フィルター
   */

  filter.filter('bookStateColor', function() {
    return function(input) {
      if (input == null) {
        return '';
      }
      switch (input) {
        case 0:
          return 'info';
        case 1:
          return 'danger';
        case 2:
          return 'warning';
      }
    };
  });

}).call(this);
