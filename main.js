const canva = document.querySelector("canvas")
//A variável constante canva serve para pegar o elemento canvas do html.
//
window.addEventListener("resize", resize)
//Cada vez que a tela sofre alguma alteração no tamanho, será chamada a função resize.
//
function resize(){
    //Criação da função resize que altera a largura do canva com base na largura da página.
    if (window.innerWidth >= 1000) {
        //Quando o valor for superior ou igual 1000(PC, TV, etc), não há a necessidade de fazer calculos,
        //apenas colocar a largura do canva como metade da largura da tela, como mostrado na linha abaixo.
        canva.style.width = window.innerWidth/2 + "px"
        return
        //retorna para fora da função sem continuar o código
    }
    if (window.innerWidth <= 420) {
        //Se a largura da tela for igual ou menor que 420, o código abaixo é executado.
        canva.style.width = window.innerWidth + "px"
        //A largura do canva é definida como a largura da tela.
        return
        //retorna para fora da função sem continuar o código
    }
    else {
        //Caso não se enquadre em nenhum caso acima o código continua abaixo
        canva.style.width = ((window.innerWidth-420)/(1000-420))*80+420 + "px"
        //Através de uma equação linear é feito um calculo, onde se o valor da tela estiver dentro dos valores
        //420 e 1000 ele realizará o calculo com esse valor, que será substituído no lugar do window.innerWidth.
        //Quanto menor esse valor, mais o canva se aproximará da largura da tela e cobrir ela horizontalmente.
    }
}
//
window.onload = resize()
//Cada vez que a página é carregada, a função resize é chamada.
