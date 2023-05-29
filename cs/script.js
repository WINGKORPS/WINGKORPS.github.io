//Toggle class active
const awalan1 = document.querySelector ('awalan1');
//ketika haburger menu diklik
document.querySelector('hamburger-menu'). onclick = () => {
    awalan1.classList.toggle('active');
}

//klik diluar cyber untuk menghilangkan awal
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function (e) {
    if(!hamburger .contains(e.target) && !awalan1 .contains (e.target) ) {
        awalan1.classlist .remove('active');
    }
});
