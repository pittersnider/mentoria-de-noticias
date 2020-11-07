let curtidas = 0;
let deslikes = 0;

function like(){
    curtidas++;
    document.getElementById('contador').innerHTML = 'Like: <b>' + curtidas + '</b>'
}

function deslike(){
    deslikes++;
    document.getElementById('contadorn').innerHTML = 'Deslike: <b>' + deslikes + '</b>'
}