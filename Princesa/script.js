/* ==========================================
        DATA DO NAMORO
   ========================================== */

// Altere para a data em que vocês começaram a namorar
const dataNamoro = new Date("2026-06-01T00:00:00");

/* ==========================================
        CONTADOR
   ========================================== */

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataNamoro;

    const segundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundos / 86400);

    const horas = Math.floor((segundos % 86400) / 3600);

    const minutos = Math.floor((segundos % 3600) / 60);

    const seg = segundos % 60;

    document.getElementById("dias").textContent =
        dias.toString().padStart(3, "0");

    document.getElementById("horas").textContent =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").textContent =
        seg.toString().padStart(2, "0");

}

setInterval(atualizarContador,1000);

atualizarContador();


const texto = `

Amor,

Este cantinho foi feito especialmente para você.

Cada cor, cada detalhe e cada animação representam um pedacinho do amor que sinto por você.

Espero que, sempre que entrar aqui, você lembre do quanto é importante para mim.

❤️

`;

let indice = 0;

function escreverTexto(){

    const elemento = document.getElementById("typing");

    if(indice < texto.length){

        elemento.innerHTML += texto.charAt(indice);

        indice++;

        setTimeout(escreverTexto,45);

    }

}

window.onload = escreverTexto;


const secoes = document.querySelectorAll("section");

function revelar(){

    const topo = window.innerHeight * 0.85;

    secoes.forEach(secao=>{

        const posicao = secao.getBoundingClientRect().top;

        if(posicao < topo){

            secao.style.opacity="1";

            secao.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",revelar);

revelar();



const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.animate([

            {transform:"translateY(0)"},

            {transform:"translateY(-10px)"},

            {transform:"translateY(0)"}

        ],{

            duration:350

        });

    });

});



const fotos = document.querySelectorAll(".foto");

fotos.forEach(foto=>{

    foto.addEventListener("mousemove",()=>{

        foto.style.transition=".3s";

    });

});


const cards = document.querySelectorAll(".music-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});



function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤";

    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.fontSize = Math.random() * 20 + 15 + "px";

    coracao.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(coracao);

    setTimeout(()=>{
        coracao.remove();
    },7000);

}

setInterval(criarCoracao,800);



function criarFolha(){

    const folha = document.createElement("div");

    folha.innerHTML = "🍃";

    folha.classList.add("folha");

    folha.style.left = Math.random() * 100 + "vw";

    folha.style.fontSize = Math.random() * 15 + 15 + "px";

    folha.style.animationDuration = Math.random() * 5 + 6 + "s";

    document.body.appendChild(folha);

    setTimeout(()=>{
        folha.remove();
    },11000);

}

setInterval(criarFolha,1500);

/* ==========================================
        PARTÍCULAS AO MOVER O MOUSE
   ========================================== */

document.addEventListener("mousemove",(e)=>{

    const particula = document.createElement("div");

    particula.classList.add("particula");

    particula.style.left = e.clientX + "px";

    particula.style.top = e.clientY + "px";

    document.body.appendChild(particula);

    setTimeout(()=>{
        particula.remove();
    },1000);

});



const elementosInterativos = document.querySelectorAll(
    ".music-card, .foto, #contador div"
);

elementosInterativos.forEach(elemento=>{

    elemento.addEventListener("mouseenter",()=>{

        elemento.style.transition = ".3s";

    });

});



const botaoComecar = document.querySelector(".btn");

if(botaoComecar){

    botaoComecar.addEventListener("click",function(e){

        e.preventDefault();

        const alvo = document.querySelector("#inicio");

        alvo.scrollIntoView({
            behavior:"smooth"
        });

    });

}



const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visivel");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
    "section, .music-card, .foto"
).forEach(el=>{
    observer.observe(el);
});

// ===============================
// PLAYER DAS MÚSICAS
// ===============================

const musicCards = document.querySelectorAll(".music-card");

musicCards.forEach(card => {

    card.addEventListener("click", function (e) {

        // Não interfere quando clicar diretamente no player
        if (
            e.target.tagName.toLowerCase() === "audio" ||
            e.target.tagName.toLowerCase() === "source"
        ) {
            return;
        }

        const audio = card.querySelector("audio");

        // Pausa todas as outras músicas
        document.querySelectorAll(".music-card audio").forEach(player => {

            if (player !== audio) {
                player.pause();
                player.currentTime = 0;
            }

        });

        // Toca ou pausa a música clicada
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

    });

});

// ===========================
// ABRIR O PRESENTE
// ===========================

const intro = document.getElementById("intro");
const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

    // Toca a primeira música
    const musica = document.getElementById("lovers");

    musica.play();

    // Animação
    gift.style.transform = "scale(1.2) rotate(10deg)";
    gift.style.transition = "0.8s";

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        },1000);

    },700);

});
