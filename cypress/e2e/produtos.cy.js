const detalhesProduto = require ("../fixtures/produtos.json")

describe('Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.adicionaProdutos(
            detalhesProduto[0].produto,
            detalhesProduto[0].tamanho,
            detalhesProduto[0].cor,
            detalhesProduto[0].quantidade
        )
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', detalhesProduto[0].quantidade)
    });

});