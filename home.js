configurarPresente(`
    Só um lembrete de que eu penso em você bem mais do que você imagina. ❤️<br><br>

    Você merece sorrisos fáceis, dias leves e gente que te trate do jeito que
    você merece — e eu quero ser uma dessas pessoas todos os dias, não só em
    datas especiais.

    Obrigado por dividir a sua vida com a minha.
`, "💌 Aberto com carinho");

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

    timerJuntos.innerHTML = montarCaixasDeTempo(partesDoTempo(decorrido));

}

function atualizarProximoAniversario(){

    if(!timerProximoAniversario) return;

    const agora = new Date();
    const diferenca = proximoAniversario() - agora;

    if(diferenca <= 0){
        timerProximoAniversario.innerHTML = "<h3>é hoje! 🎉</h3>";
        return;
    }

    timerProximoAniversario.innerHTML = montarCaixasDeTempo(partesDoTempo(diferenca));

}

if(timerJuntos || timerProximoAniversario){

    atualizarTempoJuntos();
    atualizarProximoAniversario();

    setInterval(() => {
        atualizarTempoJuntos();
        atualizarProximoAniversario();
    }, 1000);

}
