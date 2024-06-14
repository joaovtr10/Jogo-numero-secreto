
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
let tentativas = 5;
let i = 0;

document.getElementById('numero').innerHTML = numeroSecreto;

  function salvarNumSecreto(numSecreto){
    localStorage.setItem('numeroSecreto', numSecreto);
  } 

  function verificarNumero() {

    if(i == 0){
      salvarNumSecreto(numeroSecreto)
      i = 1
    }

    var chute = document.getElementById("numero").value;
    // Verifique se o número é correto
    if (chute == numeroSecreto ) {
        // Vá para a outra tela HTML
        window.location.href = "venceu.html";
        } else {
          if(tentativas == 0){
            window.location.href = "perdeu.html";
          }else{
            // Exiba uma mensagem de erro
            let quantasTentativas = tentativas > 1 ? "tentativas ": "tentativa"
            let pluOuSin = tentativas > 1 ? "restam ": "resta"
            let maiorOuMenor = numeroSecreto > chute ? "maior" : "menor"
            document.getElementById("maiorOuMenorQ").innerHTML = `O número secreto é ${maiorOuMenor} que ${chute}`;
            document.getElementById("tentaDNV").innerHTML = `Tente novamente, lhe ${pluOuSin} ${tentativas} ${quantasTentativas}`;
            }
          }
    tentativas--
   }