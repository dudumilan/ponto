configurarPresente(`
    Feliz aniversário! ❤️<br><br>

    Espero que esse pequeno presente consiga deixar seu dia um pouquinho mais
    especial.

    Você merece viver um novo ciclo cheio de felicidade, conquistas, saúde,
    momentos inesquecíveis e muitos sorrisos.

    Obrigado por dedicar um tempinho para conhecer esse cantinho que preparei
    pensando em você.

    Aproveite muito o seu dia.
`, "🎉 Presente Aberto");

const timerBirthday = document.getElementById("timerBirthday");
const timerMeet = document.getElementById("timerMeet");

function atualizarContador(dataAlvo, elemento){

    if(!elemento) return;

    const agora = new Date();
    const diferenca = dataAlvo - agora;

    if(diferenca <= 0){
        elemento.innerHTML = "<h3>AMO VOCÊ ❤️</h3>";
        return;
    }

    elemento.innerHTML = montarCaixasDeTempo(partesDoTempo(diferenca));

}

function atualizarContadores(){
    atualizarContador(new Date("2026-07-29T00:00:00"), timerBirthday);
    atualizarContador(new Date("2026-08-01T00:00:00"), timerMeet);
}

if(timerBirthday || timerMeet){
    atualizarContadores();
    setInterval(atualizarContadores, 1000);
}
