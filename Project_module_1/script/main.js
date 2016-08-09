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
};
