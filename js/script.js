window.addEventListener('load',()=>{
gsap.utils.toArray(".card,.animate-slide").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    x: -200,
    scale: 0.6,
    duration: 0.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: 'top 70%',
      scrub: 2
    }
  });
});

gsap.utils.toArray(".animate").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.6,
    duration: 0.5,
    delay: i* 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%"
    }
  });
});
})


// // main scripting 

// let main = document.getElementById('main');
 let loader = document.getElementById('loader').classList;
// let currentLink =document.querySelector('.nav-link-active');
// console.log(currentLink);
// function loadPage(link) {

//fetching navbar
if(document.getElementById('navbar')){
loader.remove('d-none')
fetch('navbar.html').then(res => res.text()).then(res => {
  document.getElementById('navbar').innerHTML = res;
}).catch(e => {
  main.innerHTML = `Something Went Wrong. Please Try Again Later`
}).finally(() => {
loader.add('d-none'); 
})
}
// }

// console.log(new URL(location.href).searchParams.get('page'))
// loadPage(new URL(location.href).searchParams.get('page')|| new URL(currentLink.href).pathname);


