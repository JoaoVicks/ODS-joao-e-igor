
window.addEventListener("scroll", function () {
    let header = document.querySelector('#inav');
    header.classList.toggle('rolagem', window.scrollY > 0);
});
window.addEventListener("scroll", function () {
    let segundoPathdoSvg = document.querySelector('.logo path:nth-of-type(3)');
    let primeiroPathdoSvg = document.querySelector('.logo path:nth-of-type(1)');
    segundoPathdoSvg.style.fill = window.scrollY > 0 ? 'white' : '#49F00C';

    primeiroPathdoSvg.style.stroke = window.scrollY > 0 ? 'white' : 'none';

    primeiroPathdoSvg.style.fill = window.scrollY > 0 ? 'none' : '#49f00C';

    primeiroPathdoSvg.style.strokeWidth = window.scrollY > 0 ? '3' : '0';
});





function console() {
    let name = document.getElementById('inome').value;
    let email = document.getElementById('iemail').value;
    var tell = document.getElementById('itel').value;
    var den = document.getElementById('den').value;

    var regex = /[a-zA-Z]/;

    var regex1 = /\d/;
    if (regex.test(tell)) {
        alert("Não insira letras no número de telefone.");
    }
    if (regex1.test(name)){
        alert("Não insira números no seu nome.");
    }
    if (name == ""){
        alert("Não deixe o campo Nome em Branco.");
    }
    if (email == ""){
        alert("Não deixe o campo Email em Branco.");
    }
    if (tell == ""){
        alert("Não deixe o campo Telefone em Branco.");
    }
    if (den == ""){
        alert("Não deixe o campo mensagem em branco.");
    }


}
function apagar(){
    let name = document.getElementById('inome').value ="";
    let email = document.getElementById('iemail').value ="";
    var tell = document.getElementById('itel').value ="";
    var den = document.getElementById('den').value ="";
}

