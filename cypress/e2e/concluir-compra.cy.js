import FaturamentoPage from "../support/page-objects/faturamento.page"
const detalhesProduto = require ("../fixtures/produtos.json")
const informacoesFaturamento = require ("../fixtures/faturamento.json")

describe('Concluir pedido na loja EBAC', () => {
    beforeEach(() => {
        cy.visit("produtos/")
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.adicionaProdutos(
            detalhesProduto[0].produto,
            detalhesProduto[0].tamanho,
            detalhesProduto[0].cor,
            detalhesProduto[0].quantidade
        )
        cy.get('.dropdown-toggle > .mini-cart-items').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()

        FaturamentoPage.detalhesFaturamento(
            informacoesFaturamento[0].nome,
            informacoesFaturamento[0].sobrenome,
            informacoesFaturamento[0].empresa,
            informacoesFaturamento[0].pais,
            informacoesFaturamento[0].rua,
            informacoesFaturamento[0].numero,
            informacoesFaturamento[0].cidade,
            informacoesFaturamento[0].estado,
            informacoesFaturamento[0].cep,
            informacoesFaturamento[0].telefone,
            informacoesFaturamento[0].email,
        )
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")
    });
});