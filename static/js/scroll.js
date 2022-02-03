document.addEventListener('DOMContentLoaded', function() {
    var section1 = document.querySelector('.section1');
    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');

    section1.addEventListener('click', function(){
        smoothScroll('.target1', 800);
    })

    section2.addEventListener('click', function(){
        smoothScroll('.target2', 700);
    })

    section3.addEventListener('click', function(){
        smoothScroll('.target3', 1000);
    })

});
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime){
        if(startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(startPosition, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }  
    
    function ease(t, b, c, d){
        t /= d /2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2)- 1) + b;
    }

    requestAnimationFrame(animation);
}
