 document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        alert("Right Click Not Allowed");
       
    });
    document.onselectstart=(e)=>{
           e.preventDefault();
        //    alert("Content Copy Are Not Allowed")
        };
        document.addEventListener("keydown",(e)=>{
            e.preventDefault();
      if(e.key.toLowerCase()==="u"&&e.ctrlKey){
        
      }
        })

// Typing Script JS
var typed = new Typed(".typing", {
    strings: ["YouTuber", "Graphic Designer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Graphic Designer", "Youtuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})
