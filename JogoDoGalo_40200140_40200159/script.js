localStorage.name = "leaderboard"
localStorage["name"] = "ESMAD"
localStorage.setItem("name", "points")


const casas = document.getElementsByTagName('input'); //casas do tabuleiro
const b_reiniciar = document.getElementById('reiniciar'); //reset
const label_jogador = document.getElementById('jogador'); //vez do jogador

let jogador = 'X';
let vencedor = ' ';
let pontosX = 0;
let pontosO = 0;


let jogadorX = prompt("Insira o seu nome:");
let jogadorO = prompt("Insira o seu nome:");

/* let jogaX = document.getElementById("pontosX")

jogax.value = jogadorX
let jogaO = document.getElementById("pontosO")

jogaO.value = jogadorO */
document.getElementById("pontosX").innerHTML = "X=" + jogadorX + ": 0";
document.getElementById("pontosO").innerHTML = "O=" + jogadorO + ": 0";

let jogador1 = "X";
let jogador2 = "O";
let jogadas = 0

for (let i = 0; i < 16; i++) {
    casas[i].addEventListener('click', (event) => {

        if ((event.target.value == ' ') && (vencedor == ' ')) {
            event.target.value = jogador;
            event.target.style.color = 'black';

            trocarJogador();

            vencedor = vitoria();



            if (vencedor != ' ') {
                label_jogador.innerText = `${vencedor} venceu!`;
            }

            if (vencedor == jogador1) {
                pontosX = pontosX + 1;
                jogadas++
                let pontos = document.getElementById('pontosX')
                pontos.innerHTML = `X= ${jogadorX}: ${pontosX}`


            } else if (vencedor == jogador2) {
                pontosO = pontosO + 1;
                jogadas++
                let pontos1 = document.getElementById('pontosO')
                pontos1.innerHTML = `O= ${jogadorO}: ${pontosO}`
            }
            let maior ;
            if (pontosO>pontosX) {
                maior = pontosO;
                
            }else{
                maior = pontosX
            }
            
            
            if (jogadas > 4) {
                document.getElementById("nova").disabled = false;
                document.getElementById("nova2").disabled = false;
                document.getElementById("nova3").disabled = false;
                document.getElementById("nova4").disabled = false;
                document.getElementById("nova5").disabled = false;
                document.getElementById("nova6").disabled = false;
                document.getElementById("nova7").disabled = false;

            }
        }
    });
    

}




function reset() {

    for (let i = 0; i < 16; i++) {
        casas[i].value = ' ';
        casas[i].style.color = 'white';
        casas[i].style.backgroundColor = 'white';
    }

    vencedor = ' ';


}

function randomStarter() {
    if (Math.floor(Math.random() * 2) == 0) {
        jogador = "O";
        label_jogador.innerText = "O";
        label_jogador.style.color = '#F00';
    } else {
        jogador = "X";
        label_jogador.innerText = "X";
        label_jogador.style.color = '#00F';
    }
}
function trocarJogador() {
    if (jogador == 'X') {
        jogador = 'O';
        label_jogador.innerText = 'O';
        label_jogador.style.color = '#F00';

    } else {
        jogador = 'X';
        label_jogador.innerText = 'X';
        label_jogador.style.color = '#00F';
    }
}

function vitoria() {
    if (jogadas > 4) {
        if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && (casas[2].value == casas[3].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[1].style.backgroundColor = '#0F0';
            casas[2].style.backgroundColor = '#0F0';
            casas[3].style.backgroundColor = '#0F0';

            return casas[0].value;

        } else if ((casas[4].value == casas[5].value) && (casas[5].value == casas[6].value) && (casas[6].value == casas[7].value) && casas[4].value != ' ') {
            casas[4].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[6].style.backgroundColor = '#0F0';
            casas[7].style.backgroundColor = '#0F0';

            return casas[4].value;

        } else if ((casas[8].value == casas[9].value) && (casas[9].value == casas[10].value) && (casas[10].value == casas[11].value) && casas[8].value != ' ') {
            casas[8].style.backgroundColor = '#0F0';
            casas[9].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';
            casas[11].style.backgroundColor = '#0F0';

            return casas[8].value;
        } else if ((casas[12].value == casas[13].value) && (casas[13].value == casas[14].value) && (casas[14].value == casas[15].value) && casas[12].value != ' ') {
            casas[12].style.backgroundColor = '#0F0';
            casas[13].style.backgroundColor = '#0F0';
            casas[14].style.backgroundColor = '#0F0';
            casas[15].style.backgroundColor = '#0F0';

            return casas[12].value;

        } else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && (casas[8].value == casas[12].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[4].style.backgroundColor = '#0F0';
            casas[8].style.backgroundColor = '#0F0';
            casas[12].style.backgroundColor = '#0F0';

            return casas[0].value;

        } else if ((casas[1].value == casas[5].value) && (casas[5].value == casas[9].value) && (casas[9].value == casas[13].value) && casas[1].value != ' ') {
            casas[1].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[9].style.backgroundColor = '#0F0';
            casas[13].style.backgroundColor = '#0F0';

            return casas[1].value;

        } else if ((casas[2].value == casas[6].value) && (casas[6].value == casas[10].value) && (casas[10].value == casas[14].value) && casas[2].value != ' ') {
            casas[2].style.backgroundColor = '#0F0';
            casas[6].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';
            casas[14].style.backgroundColor = '#0F0';

            return casas[2].value;
        } else if ((casas[3].value == casas[7].value) && (casas[7].value == casas[11].value) && (casas[11].value == casas[15].value) && casas[3].value != ' ') {
            casas[3].style.backgroundColor = '#0F0';
            casas[7].style.backgroundColor = '#0F0';
            casas[11].style.backgroundColor = '#0F0';
            casas[15].style.backgroundColor = '#0F0';

            return casas[3].value;
        } else if ((casas[0].value == casas[5].value) && (casas[5].value == casas[10].value) && (casas[10].value == casas[15].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';
            casas[15].style.backgroundColor = '#0F0';

            return casas[0].value;

        } else if ((casas[3].value == casas[6].value) && (casas[6].value == casas[9].value) && (casas[9].value == casas[12].value) && casas[3].value != ' ') {
            casas[3].style.backgroundColor = '#0F0';
            casas[6].style.backgroundColor = '#0F0';
            casas[9].style.backgroundColor = '#0F0';
            casas[12].style.backgroundColor = '#0F0';

            return casas[3].value;
        }

        return ' ';

    } else {
        if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[1].style.backgroundColor = '#0F0';
            casas[2].style.backgroundColor = '#0F0';


            return casas[0].value;

        } else if ((casas[4].value == casas[5].value) && (casas[5].value == casas[6].value) && casas[4].value != ' ') {
            casas[4].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[6].style.backgroundColor = '#0F0';


            return casas[4].value;

        } else if ((casas[8].value == casas[9].value) && (casas[9].value == casas[10].value) && casas[8].value != ' ') {
            casas[8].style.backgroundColor = '#0F0';
            casas[9].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';


            return casas[8].value;

        } else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[4].style.backgroundColor = '#0F0';
            casas[8].style.backgroundColor = '#0F0';


            return casas[0].value;

        } else if ((casas[1].value == casas[5].value) && (casas[5].value == casas[9].value) && casas[1].value != ' ') {
            casas[1].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[9].style.backgroundColor = '#0F0';


            return casas[1].value;

        } else if ((casas[2].value == casas[6].value) && (casas[6].value == casas[10].value) && casas[2].value != ' ') {
            casas[2].style.backgroundColor = '#0F0';
            casas[6].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';


            return casas[2].value;

        } else if ((casas[0].value == casas[5].value) && (casas[5].value == casas[10].value) && casas[0].value != ' ') {
            casas[0].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[10].style.backgroundColor = '#0F0';


            return casas[0].value;

        } else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != ' ') {
            casas[2].style.backgroundColor = '#0F0';
            casas[5].style.backgroundColor = '#0F0';
            casas[8].style.backgroundColor = '#0F0';


            return casas[2].value;
        }

        return ' ';

    }

}