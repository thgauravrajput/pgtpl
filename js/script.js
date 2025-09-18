window.addEventListener('load',()=>{
gsap.utils.toArray(".card,.animate-slide").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    x: -200,
    scale: 0.6,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: 'top 75%',
      scrub: 2
    }
  });
});

gsap.utils.toArray(".animate").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.6,
    duration: 0.5,
    delay: i* 0.3,
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
function loadComponent(name){
if(document.getElementById(name)){
loader.remove('d-none')
fetch(`${name}.html`).then(res => res.text()).then(res => {
  document.getElementById(name).innerHTML = res;
  
}).catch(e => {
  main.innerHTML = `Something Went Wrong. Please Try Again Later`
}).finally(() => {
  let activelink=document.getElementById('navbar').getAttribute('data-active')
   document.getElementById(activelink)?.classList.add('nav-link-active')
   loader.add('d-none'); 
})
}
}
loadComponent('navbar')
loadComponent('footer')


// console.log(new URL(location.href).searchParams.get('page'))
// loadPage(new URL(location.href).searchParams.get('page')|| new URL(currentLink.href).pathname);


