function criaCartao(categoria, prtgunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    criaCartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao_conteudo>
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_resposta"
    <p>${resposta}<p/>
    </div>
    </div>
    `
   
    container.appendChild(cartao)
    
}