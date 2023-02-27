function mostrar_yo() {
    document.getElementById('experiencia').style.display = 'none'
    document.getElementById('yo').style.display = 'block'
    document.getElementById('habilidades').style.display = 'none'
}

function mostrar_experiencia() {
    document.getElementById('yo').style.display = 'none'
    document.getElementById('experiencia').style.display = 'block'
    document.getElementById('habilidades').style.display = 'none'
}


function mostrar_habilidades() {
    document.getElementById('yo').style.display = 'none'
    document.getElementById('experiencia').style.display = 'none'
    document.getElementById('habilidades').style.display = 'block'
}


window.onload = function () {
    document.getElementById('infoper').onclick = mostrar_yo;
    document.getElementById('exper').onclick = mostrar_experiencia;
    document.getElementById('habil').onclick = mostrar_habilidades;
}

