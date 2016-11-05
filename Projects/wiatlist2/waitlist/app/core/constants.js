(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('FIREBASE_URL', 'https://productionwait.firebaseio.com/') //paste firebase URL here
    .constant('PROTECTED_PATHS', ['/waitlist']);

})();
