
describe('Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 7 

        cy.adicionaProdutos('Abominable Hoodie', 'M', "Blue", quantidade)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });

});