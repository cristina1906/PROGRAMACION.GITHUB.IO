// Service Worker
if ('serviceWorker' in navigator) {
	console.log('Si está disponible el serviceWorker en tu navegador');
	navigator.serviceWorker.register('./js/serviceworker.js')
						   .then(res => console.log('El serviceWorker se ha cargado correctamente', res))
						   .catch(err => console.log('El serviceWorker no se ha podido registrar', err))

  }else{
    console.log('PROBLEMAS para usar serviceWorker en tu navegador');
  }

$(function(){
    
   var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); 
})

var map = L.map('mapid').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

// Anime.js == Texto animado  ==
const texta01 = document.querySelector('.text-1');
texta01.innerHTML = texta01.textContent.replace(/\S/g,"<span>$&</span>")
const texta02 = document.querySelector('.text-2');
texta02.innerHTML = texta02.textContent.replace(/\S/g,"<span>$&</span>")

var animacion01 = anime.timeline({
  targets: '.text-1 span',
  easing: 'easeOutExpo',
  loop: true
});

// Add children
animacion01
.add({
    translateY: [-600,0],
    scale:[20,1],
    duration:3000,
    delay:anime.stagger(100),
    opacity: [0,1]
})
.add({ 
    translateX: [0,-1000],
    scale:[1,1],
    duration:1500,
    delay:anime.stagger(100),
    opacity: [1,0]
})
.add({  
    translateX: [1000,0],
    scale:[1,1],
    duration:1500,
    delay:anime.stagger(100),
    opacity: [0,1]
})
.add({
    translateY: [0,0],
    scale:[1,20],
    duration:3000,
    delay:anime.stagger(100),
    opacity: [1,0]
});


var animacion02 = anime.timeline({
    targets: '.text-2 span', 
    loop:true,   
  });

animacion02
.add({    
  scale:[2,1],
  easing: "easeOutBack", 
  duration:1000,      
  delay : anime.stagger(100),
  opacity: [0,.8],
})
.add({
  rotate: function(){
    return anime.random(-30,30)
  },    
  translateX: function(){
    return anime.random(-20,20)
  }, 
  translateY: function(){
    return anime.random(-10,10)
  }, 
  opacity: [.8,.4], 
  scale:[1,.9], 
  // duration:200,      
  duration:1000,      
  delay : anime.stagger(100),
})
.add({
  rotate:-10, 
  translateX:-10,     
  translateY:-5,
  opacity: [.4,.5],  
  easing: 'easeOutInQuad',
  duration:1000,
  delay : anime.stagger(100),
})
.add({  
  rotate:0, 
  translateX:0,     
  translateY:0,
  opacity: [.7,.8], 
  easing: 'easeInBack',
  scale:[.9,1],
  duration:2000,
  delay : anime.stagger(100),
});
