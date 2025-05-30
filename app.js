let gastos = [];
let fiados = [];

document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    if (tipo === 'venda') {
        vendas.push({ descricao, valor });
    } else {
        gastos.push({ descricao, valor });
    }

    atualizarRelatorios();
    this.reset();
});

document.getElementById('form-fiado').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-fiado').value;
    const valor = parseFloat(document.getElementById('valor-fiado').value);
    fiados.push({ nome, valor });
    this.reset();
});

function atualizarRelatorios() {
    const totalVendas = vendas.reduce((acc, v) => acc + v.valor, 0);
    const totalGastos = gastos.reduce((acc, g) => acc + g.valor, 0);
    const lucro = totalVendas - totalGastos;

    document.getElementById('relatorio-vendas').innerText = Total de Vendas: R$ ${totalVendas.toFixed(2)};
    document.getElementById('relatorio-gastos').innerText = Total de Gastos: R$ ${totalGastos.toFixed(2)};
    document.getElementById('relatorio-lucro').innerText = Lucro: R$ ${lucro.toFixed(2)};
}