const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");

playMusic.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playMusic.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar Música';
    } else {
        music.pause();
        playMusic.innerHTML = '<i class="fa-solid fa-play"></i> Tocar Música';
    }
});

const motivos = [
    "Seu sorriso deixa qualquer dia mais bonito.",
    "Você é uma pessoa incrível.",
    "Seu jeitinho é único.",
    "Sua risada é contagiante.",
    "Você merece tudo de melhor.",
    "Você é a melhor clove que eu ja vi jogar.",
    "Você é muito boa no valorant.",
    "Você me inspira a ser uma pessoa melhor.",
    "Eu amo ficar em call com você.",
    "Você é muito especial.",
    "Seu olhar me hipnotiza.",
    "Você tem um jeito encantador meio louco mas encantador.",
    "Você faz os pequenos momentos valerem a pena.",
    "Seu carinho é admirável.",
    "Você sempre consegue arrancar um sorriso meu.",
    "Você é linda por dentro e por fora.",
    "Sua personalidade é maravilhosa.",
    "Você tem um brilho único.",
    "Você é forte e determinada.",
    "Você faz o meu mundo ficar mais bonito.",
    "Você é um dos meus sonhos.",
    "Seu bom humor é incrível.",
    "Você é inesquecível.",
    "Você transmite felicidade.",
    "Você tem uma energia maravilhosa.",
    "Você é perfeita.",
    "Você torna os meus dias melhores.",
    "Você faz esse presente valer a pena.",
    "Porque simplesmente... você é você e eu amo você ❤️"
];

const motivoBtn = document.getElementById("motivoBtn");
const motivo = document.getElementById("motivo");

let ultimoMotivo = -1;

motivoBtn.addEventListener("click", () => {

    let numero;

    do{
        numero = Math.floor(Math.random() * motivos.length);
    }while(numero === ultimoMotivo);

    ultimoMotivo = numero;

    motivo.style.opacity = 0;

    setTimeout(() => {

        motivo.innerHTML = motivos[numero];

        motivo.style.opacity = 1;

    },200);

});

const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click",()=>{

    giftMessage.style.display="block";

    giftMessage.innerHTML=`

    Feliz aniversário! ❤️<br><br>

    Espero que esse pequeno presente consiga deixar seu dia um pouquinho mais especial.

    Você merece viver um novo ciclo cheio de felicidade, conquistas, saúde, momentos inesquecíveis e muitos sorrisros.

    Obrigado por dedicar um tempinho para conhecer esse cantinho que preparei pensando em você.

    Aproveite muito o seu dia. 

    `;

    giftButton.innerHTML="🎉 Presente Aberto";

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

const lightImage = document.createElement("img");

lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightImage.src=image.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 180; i++){

    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        a:Math.random(),
        s:Math.random()*0.4+0.1
    });

}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${star.a})`;

        ctx.fill();

        star.a+=star.s*0.01;

        if(star.a>=1 || star.a<=0){
            star.s*=-1;
        }

    });

    requestAnimationFrame(drawStars);

}

drawStars();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*24)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(criarCoracao,600);

function criarParticula(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=(window.innerHeight+50)+"px";

    sparkle.style.animationDuration=(3+Math.random()*3)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },6000);

}

setInterval(criarParticula,450);

const timerBirthday = document.getElementById("timerBirthday");
const timerMeet = document.getElementById("timerMeet");

function criarContador(data, elemento){

    const agora = new Date();

    const diferenca = data - agora;

    if(diferenca <= 0){

        elemento.innerHTML = "<h3>🎉 Chegou o grande dia!</h3>";

        return;

    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    elemento.innerHTML = `
        <div>
            <span>${dias}</span>
            <small>Dias</small>
        </div>

        <div>
            <span>${horas}</span>
            <small>Horas</small>
        </div>

        <div>
            <span>${minutos}</span>
            <small>Minutos</small>
        </div>

        <div>
            <span>${segundos}</span>
            <small>Segundos</small>
        </div>
    `;
}

function atualizarContadores(){

    criarContador(
        new Date("2026-07-29T00:00:00"),
        timerBirthday
    );

    criarContador(
        new Date("2026-08-01T00:00:00"),
        timerMeet
    );

}

setInterval(atualizarContadores,1000);

atualizarContadores();

function confetes(){

    for(let i=0;i<120;i++){

        const confete=document.createElement("div");

        confete.style.position="fixed";
        confete.style.left=Math.random()*100+"vw";
        confete.style.top="-20px";
        confete.style.width="10px";
        confete.style.height="10px";
        confete.style.background=`hsl(${Math.random()*360},100%,70%)`;
        confete.style.borderRadius="50%";
        confete.style.pointerEvents="none";
        confete.style.zIndex="99999";
        confete.style.transition="4s linear";

        document.body.appendChild(confete);

        setTimeout(()=>{

            confete.style.transform=`translateY(${window.innerHeight+100}px) rotate(720deg)`;
            confete.style.opacity="0";

        },50);

        setTimeout(()=>{

            confete.remove();

        },4500);

    }

}

giftButton.addEventListener("click",confetes);

document.addEventListener("mousemove",(e)=>{

    const brilho=document.createElement("div");

    brilho.style.position="fixed";
    brilho.style.left=e.clientX+"px";
    brilho.style.top=e.clientY+"px";
    brilho.style.width="8px";
    brilho.style.height="8px";
    brilho.style.borderRadius="50%";
    brilho.style.background="#ffffff";
    brilho.style.boxShadow="0 0 15px #fff";
    brilho.style.pointerEvents="none";
    brilho.style.opacity=".9";
    brilho.style.transition=".8s";
    brilho.style.zIndex="9999";

    document.body.appendChild(brilho);

    setTimeout(()=>{

        brilho.style.opacity="0";
        brilho.style.transform="scale(3)";

    },10);

    setTimeout(()=>{

        brilho.remove();

    },800);

});
const volume = document.getElementById("volume");

music.volume = 0.5;

volume.addEventListener("input", () => {

    music.volume = volume.value / 100;

});
