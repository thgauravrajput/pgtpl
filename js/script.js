

// main scripting 

let main = document.getElementById('main');
let loader = document.getElementById('loader').classList;
let currentLink = document.querySelector('.nav-link-active');
console.log(currentLink)

function loadPage(link) {
  loader.remove('d-none')
  fetch(link).then(res => res.text()).then(res => {
    main.innerHTML = res;
    window.scrollTo(0,0);
  }).catch(e => {
    main.innerHTML = `Something Went Wrong. Please Try Again Later`
  }).finally(() => {
    loader.add('d-none');
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        //  console.log("Link clicked!", new URL(event.target.href).pathname);
        currentLink.classList.remove('nav-link-active')
        currentLink = event.target;
        currentLink.classList.add('nav-link-active')
        loadPage(new URL(event.target.href).pathname);
      })
    });


  })

}


loadPage(new URL(currentLink.href).pathname);


