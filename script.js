var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-b")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10 +"px"
    crsr.style.top = dets.y-10 +"px"
    blur.style.left = dets.x-60 +"px"
    blur.style.top = dets.y -60+"px"

})
gsap.from(".navbar", {
    delay:0.4,
    opacity:0,
    y:-40
})
gsap.to(".navbar", {
    delay:0.4,
    opacity:1,
    duration:2,
    y:0
})
gsap.from(".content .left img",{
    delay:0.1,
    opacity:0,
    y:50
})
gsap.to(".content .left img",{
    delay:1,
    opacity:1,
    y:0,
    ease:Expo.easeOut
})