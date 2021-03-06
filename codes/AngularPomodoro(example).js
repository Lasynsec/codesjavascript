
<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <meta name="google" value="notranslate">


    <title>CodePen - Pomodoro Timer</title>
    
    
    
    
        <style>
      @import url(http://fonts.googleapis.com/css?family=Pacifico|Open+Sans:300);
* {
  margin: 0;
  font-family: Open Sans, Arial;
}

html, body, main {
  height: 100%;
  overflow: hidden;
  background-color: #333333;
}

h1 {
  display: block;
  background-color: #333333;
  margin: 0 auto;
  color: white;
  text-align: center;
  font-family: 'Pacifico';
  font-size: 5em;
}

header {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  text-transform: uppercase;
  padding: 20px;
}
header .session {
  font-size: .8em;
  display: flex;
}
header .session .breakCtrl, header .session .sessionCtrl {
  display: inline;
  padding-left: 30px;
  padding-right: 30px;
}
header .session .minus, header .session .plus {
  background-color: #333333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 2em;
  outline: none;
}
header .session .time {
  font-size: 2.5em;
  padding-left: 10px;
  padding-right: 10px;
}

section {
  background-color: #333333;
  height: 100%;
  color: #fff;
}
section .title {
  text-align: center;
  line-height: 180px;
  font-size: .8em;
}
section .timer {
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 300px;
  font-size: 4em;
  border: 2px solid #99CC00;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 20;
  overflow: hidden;
}
section .timer:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  z-index: 2;
  border: 4px solid #333333;
}
section .fill {
  content: '';
  position: absolute;
  background: #99CC00;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

    </style>

    <script>
  window.console = window.console || function(t) {};
</script>

    
    
  </head>

  <body>

    
<h1>FreeCodeCamp</h1>
<main ng-app="PomodoroApp" ng-controller="MainCtrl">
  <header>
    <div class="session">
      <div class="breakCtrl">
        <p>break length</p>
        <button ng-click="breakLengthChange(-1)" class="minus">-</button><span class="time">{{breakLength}}</span>
        <button ng-click="breakLengthChange(1)" class="plus">+</button>
      </div>
      <div class="sessionCtrl">
        <p>session length</p>
        <button ng-click="sessionLengthChange(-1)" class="minus">-</button><span class="time">{{sessionLength}}</span>
        <button ng-click="sessionLengthChange(1)" class="plus">+</button>
      </div>
    </div>
  </header>
  <section ng-click="toggleTimer()">
    <div class="timer">
      <p class="title">{{sessionName}}</p>
      <p>{{timeLeft}}</p><span ng-style="{'height':fillHeight, 'background':fillColor }" class="fill"></span>
    </div>
  </section>
</main>
      <script src="//assets.codepen.io/assets/common/stopExecutionOnTimeout-f961f59a28ef4fd551736b43f94620b5.js"></script>

    <script src='//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js'></script>

        <script>
      var app = angular.module('PomodoroApp', []);
app.controller('MainCtrl', function ($scope, $interval) {
    $scope.breakLength = 5;
    $scope.sessionLength = 25;
    $scope.timeLeft = $scope.sessionLength;
    $scope.fillHeight = '0%';
    $scope.sessionName = 'Session';
    $scope.currentTotal;
    var runTimer = false;
    var secs = 60 * $scope.timeLeft;
    $scope.originalTime = $scope.sessionLength;
    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return (h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }
    $scope.sessionLengthChange = function (time) {
        if (!runTimer) {
            if ($scope.sessionName === 'Session') {
                $scope.sessionLength += time;
                if ($scope.sessionLength < 0) {
                    $scope.sessionLength = 0;
                }
                $scope.timeLeft = $scope.sessionLength;
                $scope.originalTime = $scope.sessionLength;
                secs = 60 * $scope.sessionLength;
            }
        }
    };
    $scope.breakLengthChange = function (time) {
        if (!runTimer) {
            $scope.breakLength += time;
            if ($scope.breakLength < 0) {
                $scope.breakLength = 0;
            }
            if ($scope.sessionName === 'Break!') {
                $scope.timeLeft = $scope.breakLength;
                $scope.originalTime = $scope.breakLength;
                secs = 60 * $scope.breakLength;
            }
        }
    };
    $scope.toggleTimer = function () {
        if (!runTimer) {
            if ($scope.currentName === 'Sesson') {
                $scope.currentLength = $scope.sessionLength;
            } else {
                $scope.currentLength = $scope.breakLength;
            }
            updateTimer();
            runTimer = $interval(updateTimer, 1000);
        } else {
            $interval.cancel(runTimer);
            runTimer = false;
        }
    };
    function updateTimer() {
        secs -= 1;
        if (secs < 0) {
            var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
            var audio = new Audio(wav);
            audio.play();
            $scope.fillColor = '#333333';
            if ($scope.sessionName === 'Break!') {
                $scope.sessionName = 'Session';
                $scope.currentLength = $scope.sessionLength;
                $scope.timeLeft = 60 * $scope.sessionLength;
                $scope.originalTime = $scope.sessionLength;
                secs = 60 * $scope.sessionLength;
            } else {
                $scope.sessionName = 'Break!';
                $scope.currentLength = $scope.breakLength;
                $scope.timeLeft = 60 * $scope.breakLength;
                $scope.originalTime = $scope.breakLength;
                secs = 60 * $scope.breakLength;
            }
        } else {
            if ($scope.sessionName === 'Break!') {
                $scope.fillColor = '#FF4444';
            } else {
                $scope.fillColor = '#99CC00';
            }
            $scope.timeLeft = secondsToHms(secs);
            var denom = 60 * $scope.originalTime;
            var perc = Math.abs(secs / denom * 100 - 100);
            $scope.fillHeight = perc + '%';
        }
    }
});
      //@ sourceURL=pen.js
    </script>

    
    <script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>

    
  </body>
</html>
 
