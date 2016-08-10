window.onload = function() {
    var circles = document.getElementById('services').getElementsByClassName('icon-wrapper');
    for (var i=0; i<circles.length; i++) {
        var diam = parseInt(getComputedStyle(circles[i]).height);
        circles[i].addEventListener("mouseover", function(e) {
            if (e.target.tagName == 'DIV') {
                var j = 0.01;
                var getBigger = function() {
                    if (j<0.11) {
                        e.target.style.width = e.target.style.height = diam*(1+j)+'px';
                        j += 0.01;
                    } else {
                        clearInterval(interval);
                    }
                };
                var interval = setInterval(getBigger, 10);
            }
        });
        circles[i].addEventListener("mouseout", function(e) {
            e.target.style.width = e.target.style.height = '';
        })
    }

    function activateBars() {
        var bars = document.getElementsByClassName('progress_bar');
        for (var i = 0; i < bars.length; i++) {
            var bar = bars[i];
            var func = function() {
                var percentage = bar.parentNode.dataset.percentage;
                var style_of_bar = window.getComputedStyle(bar, null);
                var trans = style_of_bar.getPropertyValue("-webkit-transform") ||
                    style_of_bar.getPropertyValue("-moz-transform") ||
                    style_of_bar.getPropertyValue("-ms-transform") ||
                    style_of_bar.getPropertyValue("-o-transform") ||
                    style_of_bar.getPropertyValue("transform");
                var values = trans.split('(')[1].split(')')[0].split(',');
                var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
                console.log(angle);
                if (angle < -90) {angle+=360;}
                if (angle + 90 >= 90) {bar.parentNode.getElementsByClassName('first_sqr')[0].style.background = "#ffe600"; bar.parentNode.getElementsByClassName('forth_sqr')[0].style.zIndex = "2";}
                if (angle + 90 >= 180) {bar.parentNode.getElementsByClassName('sec_sqr')[0].style.background = "#ffe600";}
                if (angle + 90 >= 270) {bar.parentNode.getElementsByClassName('third_sqr')[0].style.background = "#ffe600";}
                if (angle + 90 < 360 / 100 * percentage) {
                    angle += 4;
                    bar.style.transform = "rotate(" + angle + "deg)";
                    bar.style.mozTransform = "rotate("+angle+"deg)";
                    bar.style.webkitTransform = "rotate("+angle+"deg)";
                } else {
                    clearInterval(interval);
                }

            };
            var interval = setInterval(func, 100);
        }
    }
    document.body.onscroll = function() {
        if (window.pageYOffset > document.getElementById('skills').offsetTop - 500) {
            activateBars();
        }
    }
};