function adicionarCarrinho(produto, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Verifica se o produto já está no carrinho
  const index = carrinho.findIndex(item => item.produto === produto);
  if (index !== -1) {
    // Produto existe, pergunta a quantidade a adicionar e soma à quantidade atual
    let quantidadeAdicionar = prompt(`Você já tem ${carrinho[index].quantidade || 1} unidade(s) de "${produto}". Quantas unidades deseja adicionar?`, "1");
    if (quantidadeAdicionar === null) return; // cancelou
    quantidadeAdicionar = parseInt(quantidadeAdicionar);
    if (isNaN(quantidadeAdicionar) || quantidadeAdicionar <= 0) {
      alert("Quantidade inválida.");
      return;
    }
    carrinho[index].quantidade = (carrinho[index].quantidade || 1) + quantidadeAdicionar;
  } else {
    // Produto novo, pergunta quantidade
    let quantidadeAdicionar = prompt(`Quantas unidades de "${produto}" deseja adicionar?`, "1");
    if (quantidadeAdicionar === null) return; // cancelou
    quantidadeAdicionar = parseInt(quantidadeAdicionar);
    if (isNaN(quantidadeAdicionar) || quantidadeAdicionar <= 0) {
      alert("Quantidade inválida.");
      return;
    }
    carrinho.push({ produto, preco, quantidade: quantidadeAdicionar });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${produto} adicionado ao carrinho!`);
}
