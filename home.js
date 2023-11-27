
window.addEventListener("scroll", function() {
    let header = document.querySelector('#inav');
    header.classList.toggle('rolagem', window.scrollY > 0);
});
window.addEventListener("scroll", function() {
    let segundoPathdoSvg = document.querySelector('.logo path:nth-of-type(3)');
    let primeiroPathdoSvg = document.querySelector('.logo path:nth-of-type(1)');
    segundoPathdoSvg.style.fill = window.scrollY > 0 ? 'white' : '#49F00C';

    primeiroPathdoSvg.style.stroke= window.scrollY >0 ? 'white' : 'none';

    primeiroPathdoSvg.style.fill= window.scrollY >0 ? 'none' : '#49f00C';

    primeiroPathdoSvg.style.strokeWidth= window.scrollY >0 ? '3' : '0';
});
