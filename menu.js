/*$-('.menu div').click(function(){
    $('.allPage').toggleClass('open')
})---*/

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
//hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

//remove
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll section
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

/*function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.allPage a[href*='+ sectionId +']').classList.add('active')

        } else{
            document.querySelectorAll('.allPage a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}*/


