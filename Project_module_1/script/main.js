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

    var bars = document.getElementsByClassName('progress_bar');
    function activateBars(percentages) {
        for (var i = 0; i < bars.length; i++) {
            var func = function me() {
                var percentage = percentages[me.i];
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
            func.i = i;
            func.bar = bars[i];
            func.interval = setInterval(func, 50);
        }
    }

    var info_block = document.querySelector('#info');
    var skills_block = document.querySelector('#skills');
    function showInfo(block) {
        info_block.style.display = skills_block.style.display = 'block';
        info_block.querySelector('.point-arrow').style.left = block.getBoundingClientRect().left+(block.getBoundingClientRect().right - block.getBoundingClientRect().left)/2+'px';
        info_block.querySelector('.user_name').innerHTML = block.dataset.userName;
        info_block.querySelector('.description').innerHTML = block.dataset.general;
        activateBars([block.dataset.htmlCss, block.dataset.aiPs, block.dataset.jsPhp, block.dataset.photography]);
    }

    document.querySelector('#team .row').addEventListener("click", function (e) {
        if (e.target.parentNode.className == 'general_information') {
            for (i=0;i<bars.length;i++) {
                bars[i].parentNode.getElementsByClassName('inner')[0].getElementsByTagName('span')[0].innerHTML = 0+'%';
                bars[i].parentNode.querySelector('.first_sqr').style.background = "";
                bars[i].parentNode.querySelector('.sec_sqr').style.background = "";
                bars[i].parentNode.querySelector('.third_sqr').style.background = "";
                bars[i].parentNode.querySelector('.forth_sqr').style.zIndex = "";
                bars[i].style.transform = "rotate(-90deg)";
                bars[i].style.mozTransform = "rotate(-90deg)";
                bars[i].style.webkitTransform = "rotate(-90deg)";
            }
            showInfo(e.target.parentNode);
        }
    });

    showInfo(document.querySelector('#team .general_information'));

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
        if (window.pageYOffset > document.getElementById('proud_numbers').getBoundingClientRect().top + pageYOffset - 300 && window.pageYOffset < document.getElementById('proud_numbers').getBoundingClientRect().top + pageYOffset + 100) {
            getProudNumbers();
        }
    };

    var pos = function me() {
        var step = 8;
        if (window.pageYOffset > me.top_coord + me.top_coord%step) {
            window.scrollBy(0, -step);
        } else if (window.pageYOffset < me.top_coord - me.top_coord%step) {
            window.scrollBy(0, step);
        } else {
            clearInterval(me.inter);
        }
    };

    document.getElementById('contact').onclick = function() {
        pos.top_coord = document.getElementById('contacts').getBoundingClientRect().top + pageYOffset;
        pos.inter = setInterval(pos, 2);
    };
    document.getElementById('up_button').onclick = function() {
        pos.top_coord = 0;
        pos.inter = setInterval(pos, 2);
    };
    document.querySelector('.nav').addEventListener("click", function(e){
        if (e.target.tagName == 'A') {
            e.preventDefault();
            if (e.target.getAttribute('href') == '#') {pos.top_coord = 0;} else {pos.top_coord = document.querySelector(e.target.getAttribute('href')).getBoundingClientRect().top + pageYOffset;}
            pos.inter = setInterval(pos, 2);
        }
    });

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

    document.getElementById('feedback').addEventListener("keyup", function() {
        var errors = document.getElementById('feedback').getElementsByClassName('error-msg');
        for (i=0; i<errors.length; i++) {
            errors[i].style.display = "none";
        }
        if(document.getElementById("username").value.match(/\W|[0-9_]/)) {
            document.getElementById("username").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
        if(document.getElementById("useremail").value.match(/[^\d_A-Za-z.@]/)) {
            document.getElementById("useremail").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
        if(document.getElementById("usersubject").value.match(/[^\d_A-Za-z]/)) {
            document.getElementById("usersubject").parentNode.getElementsByClassName('error-msg')[0].style.display = 'block';
        }
    });

    function setSlider (container, isControlledByDots, isAutoPlayed, isControlledByArrows) {
        var auto_slide;
        var items = container.querySelectorAll('.car-item');
        var changePositionOfElements = function me() {

            if (!me.new_element_pos) {
                if (items[+me.prev_element_pos+1]) {
                    var new_element_pos = +me.prev_element_pos + 1;
                } else {
                    new_element_pos = 0;
                }
            } else {
                if (me.new_element_pos < 0) {
                    new_element_pos = items.length - 1;
                } else if (items.length > me.new_element_pos){
                    new_element_pos = me.new_element_pos;
                } else {
                    new_element_pos = 0;
                }
            }
            if (me.prev_element_pos < new_element_pos) {
                for (j=me.prev_element_pos; j< new_element_pos; j++) {
                    items[j].style.left = "-100%";
                }
            } else {
                for (j=me.prev_element_pos; j> new_element_pos; j--) {
                    items[j].style.left = "100%";
                }
            }
            container.querySelector('.car-wrapper .car-item.active').classList.remove('active');
            items[new_element_pos].classList.add('active');
            items[new_element_pos].style.left="";
            if(isControlledByDots) {
                container.querySelector('.carousel-indicators li.active').classList.remove('active');
                container.querySelector('.carousel-indicators li[data-slide-to="'+new_element_pos+'"]').classList.add('active');
            }
            if (isAutoPlayed) {
                //changePositionOfElements.prev_element_pos = container.querySelector('.carousel-indicators li.active').dataset.slideTo;
                changePositionOfElements.prev_element_pos = new_element_pos;
                if (me.prevented_auto) {
                    auto_slide = setTimeout(changePositionOfElements,5000);
                    changePositionOfElements.prevented_auto = false;
                    changePositionOfElements.new_element_pos = '';
                } else {
                    auto_slide = setTimeout(changePositionOfElements,3000);
                }
            }
        };

        if (isAutoPlayed) {
            changePositionOfElements.prev_element_pos = 0;
            auto_slide = setTimeout(changePositionOfElements, 3000);
        }
        if (isControlledByDots) {
            container.getElementsByClassName('carousel-indicators')[0].addEventListener("click", function(e) {
                if (e.target.tagName == 'LI') {
                    if (isAutoPlayed) {
                        clearTimeout(auto_slide);
                        changePositionOfElements.prevented_auto = true;
                    }
                    changePositionOfElements.prev_element_pos = container.querySelector('.carousel-indicators li.active').dataset.slideTo;
                    changePositionOfElements.new_element_pos = e.target.dataset.slideTo;
                    changePositionOfElements();
                }
            });
        }
        if (isControlledByArrows) {
            container.getElementsByClassName('car-arrows')[0].addEventListener("click", function(e) {
                if (e.target.tagName == 'A') {
                    if (isAutoPlayed) {
                        clearTimeout(auto_slide);
                        changePositionOfElements.prevented_auto = true;
                    }
                    changePositionOfElements.prev_element_pos = container.querySelector('.car-item.active').dataset.slidePos;
                    changePositionOfElements.new_element_pos = parseInt(container.querySelector('.car-item.active').dataset.slidePos)+parseInt(e.target.dataset.slideTo)+'';
                    changePositionOfElements();
                }
            });
        }
    }
    var sliders = document.getElementsByClassName('car-container');
    for (i=0; i<sliders.length; i++) {
        setSlider(sliders[i],sliders[i].dataset.isControlledByDots, sliders[i].dataset.isAutoPlayed, sliders[i].dataset.isControlledByArrows);
    }

    document.querySelector('.navbar-toggle').addEventListener("click", function(e) {
        document.querySelector('.navbar-collapse').classList.toggle('collapse');
    })
};