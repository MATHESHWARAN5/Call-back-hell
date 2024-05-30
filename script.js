document.addEventListener("DOMContentLoaded", function() {
    var displayText = function(text) {
        document.getElementById("display").innerText = text;
    };

    var createBalloon = function(color, left) {
        var balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = color;
        balloon.style.left = left + '%';
        document.getElementById('container').appendChild(balloon);
    };

    var createFlag = function(left) {
        var flag = document.createElement('img');
        flag.src = 'national-flag-india-indian-independence-day_1090004-2251.avif';  // Replace with the correct path to your flag image
        flag.className = 'flag';
        flag.style.left = left + '%';
        document.getElementById('container').appendChild(flag);
    };

    setTimeout(function() {
        displayText(10);
        setTimeout(function() {
            displayText(9);
            setTimeout(function() {
                displayText(8);
                setTimeout(function() {
                    displayText(7);
                    setTimeout(function() {
                        displayText(6);
                        setTimeout(function() {
                            displayText(5);
                            setTimeout(function() {
                                displayText(4);
                                setTimeout(function() {
                                    displayText(3);
                                    setTimeout(function() {
                                        displayText(2);
                                        setTimeout(function() {
                                            displayText(1);
                                            setTimeout(function() {
                                                displayText('75th Happy Independence Day');
                                                createBalloon('red', 20);
                                                createBalloon('blue', 40);
                                                createBalloon('green', 60);
                                                createBalloon('yellow', 80);
                                                createFlag(10);
                                                createFlag(90);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
