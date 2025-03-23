document.querySelectorAll('.cta-btn').addEventListener('click',function(event){
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior:'smooth'
    });
});

//Animation
const sections = document.quaerySelectorAll('section');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    })
}{threshold:0.5});

sections.forEach(section => {
    observer.observe(section);
});

document.styleSheets[0].insertRule(`
    .fade-in{
    opacity:1;
    transition: opacity 1s ease-in-out;
    }
    , 0`);
