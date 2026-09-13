

const listaMotivos = document.getElementById("listaMotivos");

if(listaMotivos){

    motivos.forEach((texto, index) => {

        const item = document.createElement("div");

        item.className = "motivo-item";
        item.style.transitionDelay = (index % 10) * 0.05 + "s";

        item.innerHTML = `
            <span class="motivo-numero">${String(index + 1).padStart(2, "0")}</span>
            <p>${texto}</p>
        `;

        listaMotivos.appendChild(item);

    });

    const motivoObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });

    }, {threshold: 0.1});

    document.querySelectorAll(".motivo-item").forEach(item => {
        motivoObserver.observe(item);
    });

}
