
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
    if (regex1.test(name)) {
        alert("Não insira números no seu nome.");
    }
    if (name == "") {
        alert("Não deixe o campo Nome em Branco.");
    }
    if (email == "") {
        alert("Não deixe o campo Email em Branco.");
    }
    if (tell == "") {
        alert("Não deixe o campo Telefone em Branco.");
    }
    if (den == "") {
        alert("Não deixe o campo mensagem em branco.");
    }


}
function apagar() {
    let name = document.getElementById('inome').value = "";
    let email = document.getElementById('iemail').value = "";
    var tell = document.getElementById('itel').value = "";
    var den = document.getElementById('den').value = "";
}



document.addEventListener('DOMContentLoaded', function () {
    let path = true;
  
    function changeBolha() {
      let pudding = document.getElementById('bolha');
  
      if (path == true) {
        pudding.setAttribute('d', "M374.75 83.2154C374.75 221.501 310.361 359.979 180 359.979C49.6387 359.979 0 285.951 0 147.665C0 9.37952 22.8885 20.732 153.25 20.732C283.611 20.732 374.75 -55.0705 374.75 83.2154Z");
      } else {
        pudding.setAttribute('d', 'M246.5 119.5C246.5 202.193 200.891 285 108.552 285C16.2127 285 0 253.589 0 170.897C0 88.204 112.911 0 205.251 0C297.59 0 246.5 36.8073 246.5 119.5Z');
      }
      path = !path;
    }
  

  });
