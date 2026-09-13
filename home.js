

/* ---------- Frase do dia (muda uma vez por dia, sozinha) ---------- */
const frasesDoDia = [
    "Hoje, assim como todo dia, eu escolho você.",
    "Só passando aqui pra lembrar que eu penso em você.",
    "Espero que seu dia esteja sendo tão bom quanto você merece.",
    "Lembrete do dia: você é incrível e eu tenho muita sorte.",
    "Se ninguém te disse hoje: você está arrasando.",
    "Um dia sem falar com você já é motivo pra sentir saudade.",
    "Hoje é um bom dia pra lembrar o quanto você é especial.",
    "Só um oi carinhoso pra alegrar o seu dia.",
    "Onde quer que você esteja hoje, espero que esteja sorrindo.",
    "PS: você continua sendo minha pessoa favorita hoje também.",
    "Respira fundo, toma uma água, e lembra que alguém te ama muito.",
    "Se hoje for corrido, mais tarde a gente compensa com uma call.",
    "Mais um dia ao seu lado, mesmo que de longe.",
    "Hoje o mundo ficou um pouco melhor só por você existir nele.",
    "Se hoje tiver sido difícil, saiba que amanhã eu ainda vou estar na sua torcida.",
    "Só reforçando: você é a melhor coisa que apareceu na minha vida."
];

const fraseDoDiaEl = document.getElementById("fraseDoDia");

if(fraseDoDiaEl){

    const hoje = new Date();
    const semente = hoje.getFullYear() * 10000 + (hoje.getMonth() + 1) * 100 + hoje.getDate();
    const indice = semente % frasesDoDia.length;

    fraseDoDiaEl.textContent = frasesDoDia[indice];

}

/* ---------- Um carinho pra qualquer dia ---------- */
configurarPresente(`
    Só um lembrete de que eu penso em você bem mais do que você imagina. ❤️<br><br>

    Você merece sorrisos fáceis, dias leves e gente que te trate do jeito que
    você merece — e eu quero ser uma dessas pessoas todos os dias, não só em
    datas especiais.

    Obrigado por dividir a sua vida com a minha.
`, "💌 Aberto com carinho");

/* ---------- Nosso tempo ---------- */
const timerJuntos = document.getElementById("timerJuntos");
const timerProximoAniversario = document.getElementById("timerProximoAniversario");

const DATA_ENCONTRO = new Date("2026-08-01T00:00:00");

function proximoAniversario(){

    const agora = new Date();
    const ano = agora.getFullYear();

    let proximo = new Date(`${ano}-07-29T00:00:00`);

    if(proximo - agora <= 0){
        proximo = new Date(`${ano + 1}-07-29T00:00:00`);
    }

    return proximo;

}

function atualizarTempoJuntos(){

    if(!timerJuntos) return;

    const agora = new Date();
    const decorrido = agora - DATA_ENCONTRO;

    if(decorrido <= 0){
        timerJuntos.innerHTML = "<h3>em breve ❤️</h3>";
        return;
    }

    atualizarCaixasDeTempo(timerJuntos, partesDoTempo(decorrido));

}

function atualizarProximoAniversario(){

    if(!timerProximoAniversario) return;

    const agora = new Date();
    const diferenca = proximoAniversario() - agora;

    if(diferenca <= 0){
        timerProximoAniversario.innerHTML = "<h3>é hoje! 🎉</h3>";
        return;
    }

    atualizarCaixasDeTempo(timerProximoAniversario, partesDoTempo(diferenca));

}

if(timerJuntos || timerProximoAniversario){

    atualizarTempoJuntos();
    atualizarProximoAniversario();

    setInterval(() => {
        atualizarTempoJuntos();
        atualizarProximoAniversario();
    }, 1000);

}
