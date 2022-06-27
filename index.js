 
gsap.to(".slide",
{

left:"-1%",
width:"0%",
duration:5,
 
ease:Expo.easeOut,

})
gsap.to(".img",
{

left:"-2%",
width:"51%",
objectFit:"cover",
// minZoom:"50%",
fontStretch: "extraExpanded",
// rotate3d:"360deg",
rotate:"-90deg", 
objectPosition:"center",
duration:5,
ease:Expo.easeOut,


})
gsap.from("#d1, #d2, #d3",{
     
     left:"200%", 
     objectFit:"cover",
     stagger:.2,
    duration:5,
    ease:Expo.easeOut,
     
    

})
// gsap.from("#d2",{
     
//      left:"200%", 
//      objectFit:"cover",
//     duration:1.5,
//     ease:Expo.ease,
     
    

// })
gsap.from("#art",{
    left:"200%",
    duration:5,
    ease:Expo.easeOut,
     


})
gsap.from("h4, h3",{
    top:"200%",
    duration:5,
    ease:Expo.easeOut,
     


})
gsap.from(".circle",{
    opacity:0,
    duration:2,
    rotate:"360deg",
    ease:Expo.easeIn,
    delay:1.5,
     


})
 
