let totalGeral;
limpar();

function adicionar (){
    //recuperar valores nome do produto, quantidade, valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

   //calcular o preço, subtotal
   let preco = valorUnitario * quantidade;
   let carrinho = document.getElementById('lista-produtos');
    //adicionar ao carrinho
   carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
   <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
 </section> `;
   //atualizar o valor total
   totalGeral = totalGeral + preco;
   let campoTotal = document.getElementById('valor-total');
   campoTotal.textContent = `R$ ${totalGeral}`;
   document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}