function recuperaNumeroAleatorio() {
    return localStorage.getItem('numeroSecreto');
  }

document.getElementById("perdeu").innerHTML = `O número secreto era ${recuperaNumeroAleatorio()}`;