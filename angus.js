(function(angular) {
  var angus = angular.module("angus", []);
  angus.directive("agApp", function(agKnife, agDebug) {
    return {
      restrict: 'E',
      scope: {},
      template: "<div>TEST</div>",
      link: function(scope, element, attrs) {
        agKnife.delay(1000)
            .then(function() { return "ABC"; })
            .then(agDebug.log);
      }
    };
  });

  angus.factory("agKnife", function($q, $timeout) {
    return {
      delay: function(ms) {
        var deferred = $q.defer();
        $timeout(function() {
          deferred.resolve();
        }, ms);
        return deferred.promise;
      },
      when: function(foo) {
        return $q.when(foo);
      }
    }
  });

  angus.factory("agDebug", function(agKnife) {
    return {
      agKnife: agKnife,
      log: function(data) {
        console.log("[Debug]", data);
        this.$0 = data;
      }
    }
  });

  angus.run(function(agDebug) {
    window.agDebug = agDebug;
    window.aaa = agDebug;
  });

})(angular);