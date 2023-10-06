

/* ===================início na área de Humburger==================================== */
let menuHumburger = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');
document.addEventListener('DOMContentLoaded', () => {
    menuHumburger.addEventListener('click', ()=>{
        menuHumburger.classList.toggle('fa-xmark');
        nav.classList.toggle('active');
    });
  });

/* ===================início na área de pesquisa==================================== */

let searchBtn = document.querySelector('#search_btn');
let searchBar = document.querySelector('.seach-bar-container');
window.onscroll = () =>{
    searchBtn.classList.remove('fa-xmark');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-xmark');
    searchBar.classList.toggle('active');
});

/* ===================início na área de slide==================================== */


let radio = document.querySelector('.slider-manual-botao');
let contador = 1;
document.getElementById('slider-radio1').checked = true;

setInterval(() =>{
  proximaImagem()
}, 3500);


function proximaImagem(){
  contador++;
  if(contador > 3){
    contador = 1;
  }
  document.getElementById('slider-radio'+ contador).checked = true;
}

/* =============================PRODUTOS=========================================================== */

document.addEventListener("DOMContentLoaded", function () {
            const dropdown = document.getElementById("dropdown");
            const carneExoticas = document.getElementById("carneExoticas");
            const carnesNobres = document.getElementById("carnesNobres");
            const titulo = document.querySelector('.produto-titulo');
            dropdown.addEventListener("change", function () {
                const selectedOption = dropdown.value;
                carneExoticas.style.display = "none";
                carnesNobres.style.display = "none";

                if (selectedOption === "carneExoticas") {
                 carneExoticas.style.display = "flex"; 
                carneExoticas.style.textAlign = "center"; 
 /*                 titulo.style.marginRight = "45%"; 
                 carneExoticas.style.textAlign = "center";    */
       
                } else if (selectedOption === "carnesNobres") {
                    carnesNobres.style.display = "flex";
                    carnesNobres.style.textAlign = "center";  
                }
            });
        });

 
/* =============================PRODUTOS-slider=========================================================== */

 const carrosel = document.querySelector('.produto-carrosel');
const botoesCarrossel = document.querySelectorAll('.produto-slider i');
const primeiroItemSlider = document.querySelector('.produto-carrosel-item').offsetWidth;

botoesCarrossel.forEach(function(botao) {
  botao.addEventListener('click', () => {
    carrosel.scrollLeft += botao.id === 'left' ? -primeiroItemSlider : primeiroItemSlider;
  });
});
/*  
 let carrosel = document.querySelector('.produto-carrosel');
let botoesCarrossel = document.querySelectorAll('.produto-slider i');
let primeiroItemSlider = carrosel.querySelector('.produto-carrosel-item').offsetWidth;
let carroselItens = [...carrosel.children];
let isDragging = false, startX, startScrollLeft;
 
let carroselVerificarVista = Math.round();
carroselItens.slice();

botoesCarrossel.forEach(function(botao){
  botao.addEventListener('click', () =>{
    carrosel.scrollLeft += botao.id === "left" ? -primeiroItemSlider : primeiroItemSlider;
  });
});

let dragStart = (elemento) =>{
   isDragging = true;
  carrosel.classList.add('dragging');
  startX = elemento.pageX;
  startScrollLeft = carrosel.scrollLeft;
}

let dragging = (elemento) =>{
  if(!isDragging ){
    return;
  }
carrosel.scrollLeft = startScrollLeft - (elemento.pageX - startX);
}
let dragStop = ()=>{
  isDragging = false;
  carrosel.classList.remove('dragging');
}
carrosel.addEventListener('mousedown', dragStart);
carrosel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
 



function atualizarLarguraPrimeiroItem() {
  primeiroItemSlider = carrosel.querySelector('.produto-carrosel-item').offsetWidth;
}


function calcularElementosVisiveis() {
  const larguraTela = window.innerWidth;
  let elementosVisiveis = 1; 

  if (larguraTela >= 770 && larguraTela <= 990) {
    elementosVisiveis = 2;
  } else if (larguraTela < 770 && larguraTela >= 500) {
    elementosVisiveis = 1; 
  } else if (larguraTela < 500 && larguraTela >= 300) {
    elementosVisiveis = carroselItens.length; 
  }

  return elementosVisiveis;
}

botoesCarrossel.forEach(function(botao){
  botao.addEventListener('click', () =>{
    const elementosVisiveis = calcularElementosVisiveis();
    carrosel.scrollLeft += botao.id === "left" ? -elementosVisiveis * primeiroItemSlider : elementosVisiveis * primeiroItemSlider;
  });
});


window.addEventListener('resize', () => {
  atualizarLarguraPrimeiroItem();
  const elementosVisiveis = calcularElementosVisiveis();
  carrosel.scrollLeft = 0; 
});  */

/* ===================================CONTATO========================================== */
//  formulário 
/* let formulario = document.getElementById('contato-form');
let alerta = document.querySelector('.alerta');
let alertaDeEnvio = document.querySelector('.alertaDeEnvio');


formulario.addEventListener('submit', function(event) {
   
    event.preventDefault();


    let nomeInput = formulario.querySelector('#name');
    let emailInput = formulario.querySelector('#email');
    let celularInput = formulario.querySelector('#celular');
    let messageInput = formulario.querySelector('#message');
    let termoCheckbox = formulario.querySelector('#termo');
    let todosMeiosRadio = formulario.querySelector('#todosMeios');
    let tipoCarneRadios = document.querySelectorAll('.radio-button:checked:not(#todosMeios)');

  
    if (nomeInput.value.trim() === '') {
        alerta.textContent = 'O campo "Nome" está vazio. Por favor, preencha o campo.';
        return;
    } else {
        alerta.textContent = '';
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        alerta.textContent = 'O campo "E-mail" está vazio ou contém um endereço de e-mail inválido. Por favor, verifique as informações.';
        return;
    } else {
        alerta.textContent = '';
    }if(celularInput.value.length.trim() === ('') || celularInput.value.length !== 11 || /[^0-9]/.test(celularInput.value)){
      alerta.textContent = 'Por favor verificar o campo "Celular". O campo não pode está vazio ou com espaço, o inválido. Por favor, verifique as informações.';
      return;
    }else{
      alerta.textContent = '';
    }
    if (messageInput.value.trim() === '' || !messageInput.value.length >= 5) {
        alerta.innerHTML = `
        O campo "Mensagem" está vazio ou os caracteres foram menos que o necessário <br>
        (Mensagem com pelo menos 5 caracteres). Por favor, preencha o campo.`;
        return;
    } else {
        alerta.textContent = '';
    }


    if (!termoCheckbox.checked) {
        alerta.textContent = 'Você deve concordar com os termos e condições para enviar o formulário.';
        return;
    } else {
        alerta.textContent = '';
    }
    alertaDeEnvio.textContent = 'Sua mensagem foi enviada com sucesso!';
    nomeInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    termoCheckbox.checked = false;
});


function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
 */

document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("contato-form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const celular = document.getElementById("celular");
  const tipoCarneRadio = document.querySelectorAll('input[name="tipoCarne"]');
  const tiposDeCarnes = document.getElementById("dropdown-formulario");
  const message = document.getElementById("message");
  const termo = document.getElementById("termo");
  const alerta = document.querySelector(".alerta");
  const alertaDeEnvio = document.querySelector(".alertaDeEnvio");

  formulario.addEventListener("submit", function(event) {
    let erros = [];

    // Validação do nome
    const nomeValue = nome.value.trim();
    const nomeSplit = nomeValue.split(" ");
    if (nomeValue === "" || nomeSplit.length < 2) {
      erros.push("Nome não pode estar em branco e deve possuir nome e sobrenome");
    }

    // Validação do email
    const emailValue = email.value.trim();
    if (!isValidEmail(emailValue)) {
      erros.push("E-mail não é válido");
    }

    // Validação do celular
    const celularValue = celular.value.replace(/[\s()\-]/g, "");
    if (celularValue.length !== 11) {
      erros.push("Telefone deve possuir 11 caracteres");
    }

    // Validação do tipo de carne
    let tipoCarneSelecionado = false;
    tipoCarneRadio.forEach(function(radio) {
      if (radio.checked) {
        tipoCarneSelecionado = true;
      }
    });
    if (!tipoCarneSelecionado) {
      erros.push("Ao menos um item da Preferência deve ser marcado");
    }

    // Validação do tipo de carne favorita
    if (tiposDeCarnes.selectedIndex === 0) {
      erros.push("Selecione um Tipo de carne favorita");
    }

    // Validação da mensagem
    const messageValue = message.value.trim();
    if (messageValue.length < 5) {
      erros.push("A mensagem deve ter pelo menos 5 caracteres");
    }

    // Validação do termo de concordância
    if (!termo.checked) {
      erros.push("Você deve concordar com os termos e condições");
    }

    // Exibe mensagens de erro, se houverem
    if (erros.length > 0) {
      event.preventDefault();
      alerta.textContent = erros.join(", ");
      alerta.style.color = "red";
    } else {
      alerta.textContent = "";
    }
  });

  // Função para validar o email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
