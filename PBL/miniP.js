function circlefollow(){
    window.addEventListener("mousemove", function(dets){
            document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`
            
    })
}
function first(){
    var k = gsap.timeline();
    k.from("#nav" ,{
        y:'-10',
        opacity : 0,
        duration: 2,
        ease: Expo
    }

    )
}
function first1(){
    var l = gsap.timeline();
    l.to(".boundingelem" ,{
        y:'0',
        opacity : 100,
        duration: 0.8,
        ease: Expo
        
    }

    )
}
var a =5;

circlefollow();
first();
first1();