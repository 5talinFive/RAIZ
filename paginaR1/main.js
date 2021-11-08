const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

        // burger Animation
        burger.classList.toggle('toggle');

    });

    //animation links
    //     navLinks.forEach((link, index) => {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    //     console.log(index / 7);
    // });


}

navSlide();

