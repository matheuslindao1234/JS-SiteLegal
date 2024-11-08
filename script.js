const botao = document.querySelectorAll('.button')

botao.forEach(botao => {
    botao.addEventListener(click, function()
    {
        const atual = document.querySelector('.ativo');
        const passo = 'passo' + this.getAttribute('data-proximo');
    })
})