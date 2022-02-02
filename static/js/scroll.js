document.addEventListener('DOMContentLoaded', function() {
    var section1 = document.querySelector('.section1');
    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');

    section1.addEventListener('click', function(){
        smoothScroll('.target1', 1000);
    })

    section2.addEventListener('click', function(){
        smoothScroll('.target2', 900);
    })

    section3.addEventListener('click', function(){
        smoothScroll('.target3', 1500);
    })

});
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition)
    var startPosition = window.scrollY;
    console.log(startPosition)
    var distance = targetPosition - startPosition;
    console.log(distance)
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
