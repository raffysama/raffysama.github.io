window.addEventListener('scroll', () =>{
  var header = document.querySelector('.header');
  var scrollheight= document.querySelector('.main-container');
 
  if(window.scrollY > 68){
    header.classList.add("header-active");
    
  }
  else{
    header.classList.remove("header-active");
  }




})






 var swiper = new Swiper(".port-swiper", {
        grabCursor:true,
        loop:true,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });


      
let navBar = document.querySelector(".header .nav-menu");
let menuFaBtn = document.querySelector("#menu-bar");

menuFaBtn.onclick = () =>{
  menuFaBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
} 

window.addEventListener('load', () =>{
  
  var mainBtn = document.querySelector('.home-btn');


  menuFaBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
})  



window.addEventListener('scroll', () =>{
  var scroll = document.querySelector('.scrollTop');

  scroll.classList.toggle('active', window.scrollY > 500)


 
})


const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.header .nav .nav-menu ul li a');

window.addEventListener('scroll', () =>{
  let current = "";
  sections.forEach(section =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute('id')
    }
  })
  navA.forEach(a => {
    a.classList.remove('active');
    if(a.classList.contains(current)){
      a.classList.add('active');
    }
  })
})


var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.classList.add('success');
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.classList.add('error');
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.classList.add('success');
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
