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

        agKnife.all([agKnife.when("aaa"), agKnife.when("bbb")])
            .then(agDebug.log);

        var delayedP = agKnife.delay(500).then(function() {
          return "AAA"
        });
        agKnife.race([delayedP, agKnife.resolve("BBB")])
            .then(agDebug.log);
      }
    };
  });

  angus.factory("agKnife", function($q, $timeout) {
    return {
      delay: function(ms) {
        return new $q(function(resolve) {
          $timeout(function() {
            resolve();
          }, ms);
        });
      },
      when: function(foo) {
        return new $q(function(resolve) {
          $timeout(function() {
            resolve(foo);
          });
        });
      },
      resolve: function(foo) {
        return new $q(function(resolve) {
          resolve(foo);
        });
      },
      reject: function(foo) {
        return new $q(function(resolve, reject) {
          reject(foo);
        });
      },
      all: function(promises) {
        return new $q(function(resolve, reject) {
          var results = [];
          var fulfilledCount = 0;
          promises.forEach(function(p, index) {
            p.then(function(result) {
              results[index] = result;
              fulfilledCount++;
              if (fulfilledCount === promises.length) {
                resolve(results);
              }
            }, function(error) {
              reject(error);
            });
          });
        });
      },
      race: function(promises) {
        return new $q(function(resolve, reject) {
          promises.forEach(function(p, index) {
            p.then(function(result) {
              resolve(result);
            }, function(error) {
              reject(error);
            });
          });
        });
      }
    };
  });

  angus.factory("agDebug", function(
      $injector, $q, $timeout, $http, agKnife) {
    return {
      $injector: $injector,
      $q: $q,
      $timeout: $timeout,
      $http: $http,
      agKnife: agKnife,
      log: function(data) {
        console.log("[Debug]", data);
        this.$0 = data;
      }
    };
  });

  angus.run(function(agDebug) {
    window.agd = agDebug;
    window.agk = agDebug.agKnife;
  });

})(angular);