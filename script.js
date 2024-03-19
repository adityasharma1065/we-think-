document.body.style.overflow = 'hidden';
var vid2=document.querySelector("#vid2 video")
var deth1=document.querySelector("#det3 h1");
var loaderimg=document.querySelector("#animepage img");
var animepage=document.querySelector("#animepage");
var cur1=document.querySelector("#cur1 ")


gsap.to("#det1 h1 span",{
   opacity:1,
   y:100,
   stagger:0.3,
   scrollTrigger:{
    trigger:"#det1 h1",
    scroller:"body",
    start:"top 90%",
    end:"top 70%",
   }
})

var text=deth1.innerHTML.split("");

clutter=""
text.forEach(element => {
    console.log(element)
    clutter+=`<span>${element}</span>`

});
deth1.innerHTML=clutter;

gsap.to("#det3 h1 span",{
    color:"#E7CFB1",
    stagger:{
        amount:3
    },
    scrollTrigger:{
        trigger:"#det3",
        scroller:"body",
        // markers:true,
        // start:"top 0%",
        start:"top 65%",
        end:"top -50%",
        scrub:1,
        // pin:true
    }
    
})

var arr=[
    {"img":"img2.png"},
    {"img":"img3.png"},
    {"img":"img4.png"},
    {"img":"img5.png"},
    {"img":"img6.png"},
    {"img":"img7.png"},
    {"img":"img8.png"},
    {"img":"img9.png"},
    {"img":"img10.png"},
    {"img":"img11.png"},
]


var i=0
var anime=setInterval(function(){
    //  console.log(arr[i]["img"])
     loaderimg.setAttribute("src",arr[i]["img"])
     i++
},200)
setTimeout(()=>{
   clearInterval(anime)
   document.body.style.overflow = '';
   animepage.style.transform="translateY(-100%)"
   gsap.from("#hellopage h1",{
    y:300,
    stagger:{
        amount:0.3
    }
    
   })

   gsap.to("#det2 video",{
    width:"100%",
    scrollTrigger:{
        scroller:"body",
        trigger:"#det2 video",
        // markers:true,
        start:"top 100%",
        scrub:2,
        // pin:true

    }
   })

},2100)


animatecur=(val,interacted)=>{
    const x=val.x,
          y=val.y
    

    const anime={
        transform:`translate(${x-35}px,${y-35}px) scale(${interacted ? 1:0})`
    
    }
    cur1.animate(anime,{
        duration:200,
        fill:"forwards"
    })

}  

   

document.addEventListener("mousemove",function(val){
     
    const interactable=val.target.closest(".vid"),
    interacted= interactable !== null;

    animatecur(val,interacted)
    
})

gsap.to("#page2 h1",{
    transform:"translateX(-54%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -800%",
        // markers:true,
        scrub:1,
        pin:true,
        // delay:1
    }
})


var svg=document.querySelector("svg");

// var path=`M 100 130 Q 750 130 1400 150`

svg.addEventListener("mousemove",(val)=>{
    var yval=svg.getBoundingClientRect().y;
    

    path=`M 100 150 Q ${val.x} ${val.y-yval} 1400 150`;
    console.log(path)
    gsap.to("svg path",{
        attr:{d:path}
    })

})

svg.addEventListener("mouseleave",(val)=>{
    path="M 100 150 Q 750 150 1400 150"
    gsap.to("svg path",{
        attr:{d:path},
        duration:2.5,
ease: "elastic.out(2,0.1)",
    })
})