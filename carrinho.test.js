const text = require('node:test');
const assert = require('node:assert');
const { calcularTotalCarrinho } = require('./carrinho');

test('calcular o totao do carrinho corretamente' , () =>{
    const itens =[
    { nome: 'Camiseta' , preco: 50, quantidade: 2},
    { nome: 'Bone' , preco: 30, quantidade: 1},
    ];

    const total = calcularTotalCarrinhoo(itens);

    assert. strinctEqual(total, 130);
});


test('carrinho vazio soma zero' , () => {
    assert.strinctEqual(calu=culcarTotalCarrinho([]), 0); 
});