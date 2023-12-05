burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


// const element = document.getElementById("submit");
// element.addEventListener("click", ()=>{
//     console.log("hello world..it has been clicked");
// })

// submit = document.getElementsByClassName('.btn')
// submit.addEventListener('click', ()=>{
//    console.log("hello world");
// })
