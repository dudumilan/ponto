const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");
const volume = document.getElementById("volume");

if(music){
    music.volume = 0.5;
}

if(music && playMusic){

    playMusic.addEventListener("click", () => {

        if(music.paused){
            music.play();
        }else{
            music.pause();
        }

    });

    music.addEventListener("play", () => {
        playMusic.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar Música';
        document.querySelectorAll(".music-controls").forEach(el => el.classList.add("tocando"));
    });

    music.addEventListener("pause", () => {
        playMusic.innerHTML = '<i class="fa-solid fa-play"></i> Tocar Música';
        document.querySelectorAll(".music-controls").forEach(el => el.classList.remove("tocando"));
    });

}

if(music && volume){

    volume.addEventListener("input", () => {
        music.volume = volume.value / 100;
    });

}


const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if(navToggle && navMenu){

    navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("open");
    });

    const paginaAtual = location.pathname.split("/").pop() || "index.html";

    navMenu.querySelectorAll("a").forEach(link => {
        if(link.getAttribute("href") === paginaAtual){
            link.classList.add("active");
        }
    });

    document.addEventListener("click", (e) => {
        if(!navToggle.contains(e.target) && !navMenu.contains(e.target)){
            navMenu.classList.remove("open");
        }
    });

}

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
    "Porque simplesmente... você é você e eu amo você ❤️",
    "Você lembra dos detalhes que eu acho que ninguém prestou atenção.",
    "Você defende o que acredita, mesmo quando é mais fácil ficar calada.",
    "Seu jeito de falar rápido quando fica animada com alguma coisa é a coisa mais fofa do mundo.",
    "Você ri das minhas piadas ruins, mesmo sabendo que são ruins.",
    "Você é competitiva até debaixo d'água, e eu acho isso incrível.",
    "Você não desiste fácil de nada que quer de verdade.",
    "Seu jeito de cuidar das pessoas que você ama é gigante.",
    "Você tem opinião sobre tudo, e eu amo ouvir cada uma delas.",
    "Você fica linda até nos dias em que acha que não está.",
    "Você me ouve de verdade, não só espera a sua vez de falar.",
    "Você comemora as pequenas vitórias como se fossem enormes.",
    "Seu jeito de ficar brava é engraçado e assustador ao mesmo tempo, e mesmo assim eu amo.",
    "Você é sincera até quando dói.",
    "Você tem bom gosto pra praticamente tudo.",
    "Você guarda memórias de coisas que eu nem lembrava que tinha dito.",
    "Você não tem medo de ser exatamente quem você é.",
    "Seu jeito de ficar concentrada jogando é hipnotizante.",
    "Você comemora quando dá um clutch como se tivesse ganho um campeonato.",
    "Você não me deixa acomodar, sempre me puxa pra frente.",
    "Você tem uma criatividade que me surpreende toda vez.",
    "Seu abraço, mesmo que só de imaginação, resolve qualquer dia ruim.",
    "Você acredita em mim até nos dias em que eu não acredito.",
    "Você tem paciência comigo mesmo quando eu não mereço.",
    "Seu jeito de contar uma história do nada, cheia de detalhes, me faz rir.",
    "Você é curiosa sobre o mundo, e isso é lindo de ver.",
    "Você não esconde quem você é pra agradar ninguém.",
    "Sua voz é uma das minhas coisas favoritas de ouvir.",
    "Você fica feliz com coisas simples, e isso é raro hoje em dia.",
    "Você é leal com quem você ama.",
    "Você tem um jeito de fazer qualquer lugar parecer mais gostoso de estar.",
    "Você me desafia a pensar diferente, e eu gosto disso.",
    "Seu jeito de quase dormir enquanto a gente tá em call é engraçado e fofo ao mesmo tempo.",
    "Você tem uma força que nem sempre você mesma percebe que tem.",
    "Você faz eu rir até nos dias em que eu não tava com vontade.",
    "Você defende seus amigos com unhas e dentes.",
    "Você tem gosto musical bom (às vezes).",
    "Você fica brilhando quando fala de alguma coisa que ama.",
    "Você é engraçada sem nem tentar.",
    "Você tem um jeito único de ver o mundo.",
    "Você me faz sentir em casa, mesmo à distância.",
    "Você é a pessoa que eu quero contar as coisas boas primeiro.",
    "Você também é a pessoa que eu quero contar as coisas ruins primeiro.",
    "Você não julga meus gostos estranhos.",
    "Você aceita minhas manias sem reclamar (muito).",
    "Você tem um coração enorme pra quem te conhece de verdade.",
    "Você faz eu acreditar em coisas boas de novo.",
    "Seu jeito de ficar orgulhosa de mim me deixa sem palavras.",
    "Você tem uma memória absurda pra detalhes bobos, e eu amo isso.",
    "Você sabe me acalmar quando eu tô ansioso.",
    "Você tem estilo próprio, e isso é raro.",
    "Você luta pelas coisas que quer na vida.",
    "Você é gentil até quando ninguém tá olhando.",
    "Você faz eu querer estar por perto, mesmo em dias silenciosos.",
    "Você tem senso de humor ácido que me pega de surpresa.",
    "Você é a primeira pessoa que eu quero mandar mensagem quando algo bom acontece.",
    "Você não tem vergonha de ser intensa quando ama alguma coisa.",
    "Você trata as pessoas com respeito, mesmo quando não precisa.",
    "Você tem gestos pequenos que significam muito pra mim.",
    "Você é imprevisível de um jeito bom.",
    "Você faz eu rir só de mandar um áudio bobo.",
    "Você tem uma vontade de crescer que me inspira.",
    "Você não fecha os olhos pros meus defeitos, e mesmo assim fica.",
    "Seu jeito de comemorar coisas pequenas faz elas parecerem gigantes.",
    "Você é a pessoa mais teimosa que eu conheço, e de um jeito bom.",
    "Você tem um jeito de me fazer sentir importante sem nem perceber.",
    "Você guarda um espaço pra mim mesmo nos dias corridos.",
    "Você é a definição de \"vale a pena esperar\".",
    "Você faz eu acreditar que a gente pode construir uma coisa boa juntos.",
    "Você é a minha pessoa favorita pra dividir silêncio também.",
    "Cada motivo dessa lista é verdade, e ainda cabia mais cem.",
    "Porque, no fim das contas, é sempre você. ❤️"
];

const motivoBtn = document.getElementById("motivoBtn");
const motivoEl = document.getElementById("motivo");

if(motivoBtn && motivoEl){

    let ultimoMotivo = -1;

    motivoBtn.addEventListener("click", () => {

        let numero;

        do{
            numero = Math.floor(Math.random() * motivos.length);
        }while(numero === ultimoMotivo);

        ultimoMotivo = numero;

        motivoEl.style.opacity = 0;

        setTimeout(() => {
            motivoEl.innerHTML = motivos[numero];
            motivoEl.style.opacity = 1;
        }, 200);

    });

}


function configurarPresente(mensagemHTML, textoAberto){

    const giftButton = document.getElementById("giftButton");
    const giftMessage = document.getElementById("giftMessage");

    if(!giftButton || !giftMessage) return;

    giftButton.addEventListener("click", () => {

        giftMessage.style.display = "block";
        giftMessage.innerHTML = mensagemHTML;
        giftButton.innerHTML = textoAberto;

        dispararConfete();

    });

}


function dispararConfete(){

    for(let i = 0; i < 120; i++){

        const confete = document.createElement("div");

        confete.style.position = "fixed";
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = "-20px";
        confete.style.width = "10px";
        confete.style.height = "10px";
        confete.style.background = `hsl(${Math.random() * 360},100%,70%)`;
        confete.style.borderRadius = "50%";
        confete.style.pointerEvents = "none";
        confete.style.zIndex = "99999";
        confete.style.transition = "4s linear";

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.style.transform = `translateY(${window.innerHeight + 100}px) rotate(720deg)`;
            confete.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            confete.remove();
        }, 4500);

    }

}


function partesDoTempo(ms){

    const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
    const horas = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((ms % (1000 * 60)) / 1000);

    return {dias, horas, minutos, segundos};

}

function montarCaixasDeTempo(partes){

    return `
        <div>
            <span>${partes.dias}</span>
            <small>Dias</small>
        </div>
        <div>
            <span>${partes.horas}</span>
            <small>Horas</small>
        </div>
        <div>
            <span>${partes.minutos}</span>
            <small>Minutos</small>
        </div>
        <div>
            <span>${partes.segundos}</span>
            <small>Segundos</small>
        </div>
    `;

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });

});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});


const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightImage = document.createElement("img");
lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

document.addEventListener("click", (e) => {

    const alvo = e.target.closest(".gallery img, .polaroid img, .galeria-completa img");

    if(alvo){
        lightbox.classList.add("active");
        lightImage.src = alvo.src;
        return;
    }

    if(lightbox.classList.contains("active")){
        lightbox.classList.remove("active");
    }

});


const canvas = document.getElementById("stars");

if(canvas){

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    for(let i = 0; i < 180; i++){

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            a: Math.random(),
            s: Math.random() * 0.4 + 0.1
        });

    }

    function drawStars(){

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${star.a})`;
            ctx.fill();

            star.a += star.s * 0.01;

            if(star.a >= 1 || star.a <= 0){
                star.s *= -1;
            }

        });

        requestAnimationFrame(drawStars);

    }

    drawStars();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

}

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 24) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(criarCoracao, 600);


function criarParticula(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = (window.innerHeight + 50) + "px";
    sparkle.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);

}

setInterval(criarParticula, 450);


let ultimoBrilho = 0;

document.addEventListener("mousemove", (e) => {

    const agora = performance.now();

    if(agora - ultimoBrilho < 45) return;
    ultimoBrilho = agora;

    const brilho = document.createElement("div");

    brilho.style.position = "fixed";
    brilho.style.left = e.clientX + "px";
    brilho.style.top = e.clientY + "px";
    brilho.style.width = "8px";
    brilho.style.height = "8px";
    brilho.style.borderRadius = "50%";
    brilho.style.background = "#ffffff";
    brilho.style.boxShadow = "0 0 15px #fff";
    brilho.style.pointerEvents = "none";
    brilho.style.opacity = ".9";
    brilho.style.transition = ".8s";
    brilho.style.zIndex = "9999";

    document.body.appendChild(brilho);

    setTimeout(() => {
        brilho.style.opacity = "0";
        brilho.style.transform = "scale(3)";
    }, 10);

    setTimeout(() => {
        brilho.remove();
    }, 800);

});


const backgroundDecor = document.getElementById("backgroundDecor");

if(backgroundDecor){

    const imagensDecor = ["clove1.png", "clove2.png", "clove3.png", "clove4.png"];
    let decorEls = [];

    function podeColocar(x, y, tamanho, posicoes){

        for(const p of posicoes){

            const dx = x - p.x;
            const dy = y - p.y;
            const distancia = Math.sqrt(dx * dx + dy * dy);

            if(distancia < (tamanho + p.tamanho) * 0.55){
                return false;
            }

        }

        return true;

    }

    function criarDecoracoes(){

        backgroundDecor.innerHTML = "";

        const posicoes = [];
        const alturaPagina = document.documentElement.scrollHeight;

        let ultimaImagem = -1;

        for(let i = 0; i < 60; i++){

            let indice;

            do{
                indice = Math.floor(Math.random() * imagensDecor.length);
            }while(indice === ultimaImagem);

            ultimaImagem = indice;

            const tamanho = 70 + Math.random() * 70;

            let x, y;
            let tentativas = 0;

            do{
                x = Math.random() * (window.innerWidth - tamanho);
                y = Math.random() * alturaPagina;
                tentativas++;
            }while(!podeColocar(x, y, tamanho, posicoes) && tentativas < 200);

            posicoes.push({x, y, tamanho});

            const img = document.createElement("img");

            img.src = imagensDecor[indice];
            img.className = "decor";
            img.style.left = x + "px";
            img.style.top = y + "px";
            img.style.width = tamanho + "px";
            img.style.opacity = 0.14 + Math.random() * 0.14;
            img.style.animationDuration = (6 + Math.random() * 5) + "s";
            img.style.animationDelay = (Math.random() * 6) + "s";
            img.style.transform = `rotate(${Math.random() * 360}deg)`;

            backgroundDecor.appendChild(img);

        }

        decorEls = Array.from(backgroundDecor.querySelectorAll(".decor"));

    }

    criarDecoracoes();

    window.addEventListener("load", criarDecoracoes);
    window.addEventListener("resize", criarDecoracoes);

    let scrollTicking = false;

    window.addEventListener("scroll", () => {

        if(scrollTicking) return;
        scrollTicking = true;

        requestAnimationFrame(() => {

            const scroll = window.pageYOffset;

            decorEls.forEach((img, index) => {
                const velocidade = (index % 5 + 1) * 0.08;
                img.style.transform = `translateY(${scroll * velocidade}px) rotate(${index * 35}deg)`;
            });

            scrollTicking = false;

        });

    });

}
