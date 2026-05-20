let carrinho = [];

function add(nome, preco) {
    const item = carrinho.find(i => i.nome === nome);

    if (item) {
        item.qtd++;
    } else {
        carrinho.push({
            nome: nome,
            preco: Number(preco),
            qtd: 1
        });
    }

    render();
}

function addBebida() {
    const bebidaSelect = document.getElementById("bebidaSelect");
    const bebidaPreco = document.getElementById("bebidaPreco");

    const bebida = bebidaSelect.value;
    const preco = Number(bebidaPreco.value);

    add(bebida, preco);
}

function render() {
    const div = document.getElementById("itens");
    const totalSpan = document.getElementById("total");

    div.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.qtd;

        div.innerHTML += `
            <div class="item-carrinho">
                ${item.nome} <br>
                Qtd: ${item.qtd} <br>
                R$ ${(item.preco * item.qtd).toFixed(2)}
            </div>
        `;
    });

    totalSpan.textContent = total.toFixed(2);
}

function limpar() {
    carrinho = [];
    render();
}

function finalizar() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const pagamento = document.getElementById("pagamento").value;
    let mensagem = "Pedido finalizado!\n\n";

    carrinho.forEach(item => {
        mensagem += `${item.qtd}x ${item.nome} - R$ ${(item.preco * item.qtd).toFixed(2)}\n`;
    });

    mensagem += `\nPagamento: ${pagamento}`;
    mensagem += `\nTotal: R$ ${document.getElementById("total").textContent}`;

    alert(mensagem);
    limpar();
}