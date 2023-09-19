const { faker } = require('@faker-js/faker');

describe('Funcionalidade pré cadastro', ()=> {

    beforeEach(()=> {
        cy.visit('minha-conta/')
    })

    it('Deve completar o pré cadastro com sucesso', ()=> {

        let emailFaker = faker.internet.email()
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()

        cy.preCadastro(emailFaker, 'senha!@senha', nomeFaker, sobrenomeFaker)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })
})