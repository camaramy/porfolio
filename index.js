/*icon Menu*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

}
showMenu('nav-toggle', 'nav-menu');

/*supprimer le menu mobile*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*scroll section active(lien)*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageXOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

//animation: 
const myText = document.getElementById('text');

new Typewriter(myText, {
        loop: true
    })
    .typeString("je suis Amy CAMARA,")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("Créative")
    .pauseFor(1000)
    .deleteChars(8)
    .typeString("Agile.")
    .pauseFor(1000)
    .deleteChars(6)
    .typeString("Déterminée.")
    .pauseFor(1000)
    .deleteChars(18)
    .typeString("'ai un esprit d'equipe.")
    .pauseFor(1000)
    .start();