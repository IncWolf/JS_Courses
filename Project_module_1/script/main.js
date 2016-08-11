window.onload = function() {
    var circles = document.getElementsByClassName('js-get-bigger');
    for (var i=0; i<circles.length; i++) {
        var biggerWrapper = function me(e) {
            //if (e.target.tagName == 'DIV') {
                var j = 0.01;
                var getBigger = function() {
                    if (j<0.11) {
                        e.target.style.width = e.target.style.height = me.diam*(1+j)+'px';
                        j += 0.01;
                    } else {
                        clearInterval(interval);
                    }
                };
                var interval = setInterval(getBigger, 10);
            //}
        };
        biggerWrapper.diam = parseInt(getComputedStyle(circles[i]).height);
        circles[i].addEventListener("mouseenter", biggerWrapper);
        circles[i].addEventListener("mouseleave", function(e) {
            e.target.style.width = e.target.style.height = '';
        })
    }



    function activateBars() {
        var bars = document.getElementsByClassName('progress_bar');
        for (var i = 0; i < bars.length; i++) {
            var func = function me() {
                var percentage = me.bar.parentNode.dataset.percentage;
                var numbers = me.bar.parentNode.getElementsByClassName('inner')[0].getElementsByTagName('span')[0];
                var style_of_bar = window.getComputedStyle(me.bar, null);
                var trans = style_of_bar.getPropertyValue("-webkit-transform") ||
                    style_of_bar.getPropertyValue("-moz-transform") ||
                    style_of_bar.getPropertyValue("-ms-transform") ||
                    style_of_bar.getPropertyValue("-o-transform") ||
                    style_of_bar.getPropertyValue("transform");
                var values = trans.split('(')[1].split(')')[0].split(',');
                var angle = Math.atan2(values[1], values[0]) * (180 / Math.PI);
                if (angle < -90) {angle+=360;}
                if (angle + 90 >= 90) {me.bar.parentNode.getElementsByClassName('first_sqr')[0].style.background = "#ffe600"; me.bar.parentNode.getElementsByClassName('forth_sqr')[0].style.zIndex = "2";}
                if (angle + 90 >= 180) {me.bar.parentNode.getElementsByClassName('sec_sqr')[0].style.background = "#ffe600";}
                if (angle + 90 >= 270) {me.bar.parentNode.getElementsByClassName('third_sqr')[0].style.background = "#ffe600";}
                if (angle + 90 < 360 * percentage / 100) {
                    angle += 3.75*percentage/100;
                    if (parseInt(numbers.innerHTML)<percentage) {numbers.innerHTML = parseInt(numbers.innerHTML)+1+'%';}
                    me.bar.style.transform = "rotate(" + angle + "deg)";
                    me.bar.style.mozTransform = "rotate("+angle+"deg)";
                    me.bar.style.webkitTransform = "rotate("+angle+"deg)";
                } else {
                    numbers.innerHTML = percentage+'%';
                    clearInterval(me.interval);
                }

            };
            func.bar = bars[i];
            func.interval = setInterval(func, 50);
        }
    }

    activateBars();

    function getProudNumbers() {
        var numbers = document.getElementById('proud_numbers').getElementsByClassName('numbers');
        var cycle_step = 100;
        for (var i=0; i < numbers.length; i++) {
            var counter = function me() {
                if(parseInt(me.elem.innerHTML) < me.elem.dataset.maxval - (me.elem.dataset.maxval % (3000/cycle_step))) {
                    me.elem.innerHTML = parseInt(me.elem.innerHTML)+Math.round(me.elem.dataset.maxval/(3000/cycle_step));
                } else {
                    me.elem.innerHTML = me.elem.dataset.maxval;
                    clearInterval(me.start_counter);
                }
            };
            counter.elem = numbers[i];
            counter.start_counter = setInterval(counter, cycle_step);
        }
    }

    document.body.onscroll = function() {
        if (window.pageYOffset > document.getElementById('proud_numbers').offsetTop - 300 && window.pageYOffset < document.getElementById('proud_numbers').offsetTop + 100) {
            getProudNumbers();
        }
    };

    document.getElementById('contact').onclick = function() {
        var pos = function me() {
            if (window.pageYOffset < document.getElementById('contacts').offsetTop - 200) {
                window.scrollBy(0, 100);
            } else {
                clearInterval(me.inter);
            }
        };
        pos.inter = setInterval(pos, 35);
    };

    document.getElementById('up_button').onclick = function() {
        var pos = function me() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -100);
            } else {
                clearInterval(me.inter);
            }
        };
        pos.inter = setInterval(pos, 35);
    };

    var photos = document.getElementById('photo_container').getElementsByTagName('img');
    for (i=0; i<photos.length; i++) {
        var onHover = function me() {
            var new_div = document.createElement('div');
            new_div.style.position = "absolute";
            new_div.style.top = "0";
            new_div.style.left = "0";
            new_div.style.right = "0";
            new_div.style.height = "250px";
            new_div.style.weight = "320px";
            new_div.className = "mask";
            new_div.style.backgroundColor = "rgba(255, 230, 0,.41)";
            new_div.style.padding = parseInt(getComputedStyle(me.elem).height)/2-15+"px 0";
            new_div.style.color = "#ffffff";
            new_div.innerHTML = "<span style='font-size:25px;font-weight:700;'>SIMPLE IMAGE</span><br><span style='text-transform: uppercase;'>"+me.elem.dataset.category+"</span>";
            me.elem.parentNode.appendChild(new_div);
        };
        var onHoverOut = function me() {
            me.elem.parentNode.removeChild(me.elem.parentNode.getElementsByClassName('mask')[0]);
        };
        onHover.elem = onHoverOut.elem = photos[i];
        photos[i].parentNode.addEventListener("mouseenter", onHover);
        photos[i].parentNode.addEventListener("mouseleave", onHoverOut);
    }

    function getFiltered(text) {
        for (i=0; i<photos.length; i++) {
            photos[i].parentNode.style.display="none";
            if (photos[i].dataset.category.toUpperCase() == text || text == 'ALL') {
                photos[i].parentNode.style.display="inline-block";
            }
        }
    }

    var filter_options = document.getElementById('filter').getElementsByTagName('a');
    for (i=0; i<filter_options.length; i++) {
        filter_options[i].onclick = function() {
            this.parentNode.getElementsByClassName('selected')[0].classList.remove('selected');
            this.classList.add('selected');
            getFiltered(this.outerText);
        }
    }
    getFiltered('ALL');

    document.getElementById('feedback').addEventListener("keydown", function(e) {
        var errors = document.getElementById('feedback').getElementsByClassName('error-msg');
        for (i=0; i<errors.length; i++) {
            errors[i].style.display = "none";
        }
        if(document.getElementById("username").value.match(/\d/)) {
            document.getElementById("username").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
        if(!document.getElementById("useremail").value.match(/\$/)) {
            document.getElementById("useremail").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
        if(document.getElementById("usersubject").value.match(/\D/)) {
            document.getElementById("usersubject").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
    });
};