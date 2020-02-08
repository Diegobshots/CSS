let cursorRaton = document.querySelector('.cursor');
let navItems = document.querySelectorAll('.nav-item ');

window.addEventListener('mousemove', cursor);

function cursor(e){
    console.log(e);
    cursorRaton.style.top =  e.pageY + 'px';
    cursorRaton.style.left =  e.pageX + 'px';
}


navItems.forEach(link => {
    link.addEventListener('mouseover', () =>{
        cursorRaton.classList.add('link-crece');
        link.classList.add('hovered-link');
    });
    link.addEventListener('mouseleave', () =>{
        cursorRaton.classList.remove('link-crece');
        link.classList.remove('hovered-link');

    });
})