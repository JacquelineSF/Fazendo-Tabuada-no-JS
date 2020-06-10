function calcular(){
    /* Agora temos que criar as variáveis que estão no HTML*/
    let num = document.getElementById('txttab')
    let tab = document.getElementById('tab')

    /*Agora fazer um teste lógico para caso a pessoa não digite nada e mesmo assim clique em 'calcular'*/
    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número.')
    }
    /*Feito o teste, agora vamos colocar o que vai acontecer se a pessoa colocar um número. Primeiro temos que transformar nossa variavel num em número, pois mesmo ela sendo um input tipo number, ela ainda é um texto*/
    else{
        let n = Number(num.value)
        /*Para a caixa de texto ser 'limpa' sempre que for colocado um novo número, fazemos o seguinte*/
        tab.innerHTML = ''
        /* Agora está na vez do laço, a nossa repetição, podendo ser tanto while quanto for. Enquanto c for igual a 1, enquanto c for menor ou igual a 10 e enquanto acrescentar 1, faça: .*/
        for(let c = 1; c<=10; c++ ){
            /*tem que ser criada uma variavel para ter option dentro dele, que vai representar cada item, cada valor da tabuada de tal número. Para isso voce tem que criar um elemento. Portanto a variavel item é um option*/
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`

            tab.appendChild(item)

        }

    }
}