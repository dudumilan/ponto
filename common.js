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

    "Porque seu sorriso consegue mudar completamente o clima de um dia.",

    "Porque seu jeito de ser é uma das coisas que mais me encanta em você.",

    "Porque eu nunca me canso de ouvir sua voz.",

    "Porque qualquer partida fica mais divertida quando é com você.",

    "Porque você consegue transformar uma partida comum em uma memória que eu vou guardar.",

    "Porque você joga de Clove como se tivesse nascido para isso.",

    "Porque até quando você faz uma jogada absurda parece que foi fácil.",

    "Porque você é uma das pessoas mais habilidosas com quem eu já joguei Valorant.",

    "Porque suas plays de Clove são simplesmente inacreditáveis.",

    "Porque eu adoro quando você entra no modo competitivo e começa a levar a partida a sério.",

    "Porque você fica ainda mais incrível quando está concentrada jogando.",

    "Porque eu adoro ouvir você comemorando depois de uma jogada muito boa.",

    "Porque até perder uma partida fica menos ruim quando estou jogando com você.",

    "Porque nossas calls conseguem fazer o tempo passar rápido demais.",

    "Porque algumas das minhas melhores lembranças começaram simplesmente com uma call com você.",

    "Porque você consegue me fazer rir sem nem perceber.",

    "Porque seu jeito espontâneo é uma das coisas mais bonitas em você.",

    "Porque você não precisa tentar ser interessante para conseguir prender minha atenção.",

    "Porque eu gosto de ouvir até as histórias mais aleatórias que você conta.",

    "Porque conversar com você nunca parece uma obrigação.",

    "Porque com você até ficar em silêncio parece confortável.",

    "Porque sua presença faz diferença mesmo quando você não percebe.",

    "Porque eu sempre fico feliz quando vejo que você está online.",

    "Porque uma simples mensagem sua consegue melhorar meu dia.",

    "Porque eu gosto de saber como foi seu dia.",

    "Porque eu gosto quando você compartilha comigo as pequenas coisas que acontecem com você.",

    "Porque você faz eu querer conhecer cada vez mais o seu jeito de pensar.",

    "Porque você tem uma personalidade que não dá para confundir com a de ninguém.",

    "Porque você tem um jeito único de falar e se expressar.",

    "Porque sua risada é uma das minhas coisas favoritas.",

    "Porque você consegue ser engraçada sem precisar se esforçar.",

    "Porque você tem um humor que sempre consegue me pegar desprevenido.",

    "Porque até suas reclamações durante uma partida conseguem me fazer sorrir.",

    "Porque eu adoro quando você fica indignada com alguma coisa no jogo.",

    "Porque você comemorando uma vitória é quase tão divertido quanto a própria vitória.",

    "Porque eu gosto até dos seus momentos de rage no Valorant.",

    "Porque você consegue transformar uma derrota em uma história engraçada depois.",

    "Porque eu adoro quando você fala 'confia' e alguma coisa completamente absurda acontece.",

    "Porque você tem uma confiança jogando que eu admiro muito.",

    "Porque você não desiste fácil quando realmente quer alguma coisa.",

    "Porque sua determinação é uma das características que mais admiro em você.",

    "Porque você tem uma força que talvez nem perceba que possui.",

    "Porque você consegue continuar sendo você mesma mesmo quando as coisas não estão perfeitas.",

    "Porque eu admiro a maneira como você enfrenta seus próprios dias difíceis.",

    "Porque você tem muito mais valor do que talvez consiga enxergar em si mesma.",

    "Porque você merece ser lembrada de todas as coisas boas que existem em você.",

    "Porque eu gosto da maneira como você trata as pessoas que são importantes para você.",

    "Porque seu carinho aparece até nos pequenos detalhes.",

    "Porque você consegue fazer alguém se sentir importante sem precisar dizer muita coisa.",

    "Porque eu gosto quando você lembra de coisas que eu falei há muito tempo.",

    "Porque esses pequenos detalhes ficam muito maiores para mim do que você imagina.",

    "Porque eu gosto da maneira como você consegue ser você mesma comigo.",

    "Porque eu sinto que posso ser eu mesmo quando estou falando com você.",

    "Porque nunca precisei fingir ser outra pessoa para conseguir conversar com você.",

    "Porque eu gosto da nossa liberdade de falar besteira um com o outro.",

    "Porque nossas conversas conseguem ir de assuntos sérios para a maior bobagem em questão de segundos.",

    "Porque você consegue deixar momentos simples muito mais especiais.",

    "Porque eu guardo com carinho vários momentos que talvez para você tenham parecido completamente normais.",

    "Porque aquele pouco tempo que tivemos juntos pessoalmente significou muito para mim.",

    "Porque mesmo tendo sido pouco tempo, eu aproveitei cada segundo ao seu lado.",

    "Porque te ver pessoalmente fez tudo aquilo que eu já gostava em você parecer ainda mais real.",

    "Porque depois daquele momento eu passei a valorizar ainda mais cada conversa nossa.",

    "Porque eu ainda lembro de como foi bom simplesmente estar perto de você.",

    "Porque eu gostaria de viver muitos outros momentos assim com você algum dia.",

    "Porque você é ainda mais bonita pessoalmente do que eu conseguia imaginar.",

    "Porque seu jeito pessoalmente conseguiu me encantar tanto quanto seu jeito nas calls.",

    "Porque estar perto de você foi um daqueles momentos que eu queria que durassem mais.",

    "Porque mesmo depois de tanto tempo jogando juntos, você ainda consegue me surpreender.",

    "Porque eu nunca achei que uma pessoa que conheci jogando pudesse se tornar tão importante para mim.",

    "Porque uma partida de Valorant acabou virando parte de uma amizade que significa muito para mim.",

    "Porque entre tantas pessoas que eu poderia ter conhecido no jogo, eu tive a sorte de conhecer você.",

    "Porque eu gosto da história que existe por trás de nós dois.",

    "Porque nossas memórias são especiais justamente porque aconteceram naturalmente.",

    "Porque eu adoro lembrar das partidas antigas que jogamos juntos.",

    "Porque algumas músicas, lugares ou situações acabam me fazendo lembrar de você.",

    "Porque você deixou sua marca em vários dos meus momentos favoritos.",

    "Porque eu gosto de imaginar quantas outras memórias ainda podemos criar.",

    "Porque você consegue fazer uma noite comum parecer muito mais divertida.",

    "Porque eu poderia passar horas em call com você sem perceber o tempo passar.",

    "Porque eu nunca acho que conversar com você está sendo perda de tempo.",

    "Porque até quando não temos assunto, eu ainda gosto de estar ali.",

    "Porque sua companhia é boa mesmo quando não estamos fazendo nada de especial.",

    "Porque você tem um jeito que faz eu querer ficar por perto.",

    "Porque você me faz sorrir em momentos em que eu nem estava esperando sorrir.",

    "Porque você consegue deixar dias ruins um pouco mais leves.",

    "Porque eu gosto de saber que existe alguém como você na minha vida.",

    "Porque você é uma daquelas pessoas que a gente conhece e não esquece.",

    "Porque você conseguiu se tornar especial sem precisar fazer nada extraordinário.",

    "Porque foram vários pequenos momentos que fizeram eu gostar tanto de você.",

    "Porque eu admiro muito a pessoa que você é.",

    "Porque eu acho incrível a maneira como você consegue ser tão única.",

    "Porque quanto mais eu conheço você, mais coisas encontro para admirar.",

    "Porque eu poderia escrever muito mais do que cem motivos sobre você.",

    "Porque até depois de escrever noventa e nove motivos eu ainda teria coisa para falar.",

    "Porque você é uma pessoa que eu tenho muita sorte de ter conhecido.",

    "Porque você ocupa um espaço muito especial nas minhas melhores lembranças.",

    "Porque eu gosto de você pelo seu jeito, pelas suas manias, pelas suas qualidades e até pelas suas pequenas implicâncias.",

    "Porque você não precisa ser perfeita para ser incrível para mim.",

    "Porque ser você mesma já é mais do que suficiente.",

    "Porque entre tantas pessoas no mundo, foi justamente você quem conseguiu conquistar um lugar tão especial no meu coração.",

    "Porque cada call, cada partida, cada conversa e cada momento ao seu lado acabou significando mais do que eu esperava.",

    "Porque eu sou muito feliz por ter conhecido você.",

    "Porque, no fim de todos esses motivos, existe um que explica todos os outros: eu gosto muito de você. ❤️"

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
