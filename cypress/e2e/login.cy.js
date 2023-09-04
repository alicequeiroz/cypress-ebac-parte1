describe ('Funcionalidade de login', ()=> {

    beforeEach(()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it ('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it ('Deve exibir mensagem de erro ao submeter usuário inválido', ()=> {
        cy.get('#username').type('alunoo_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
    })

    it ('Deve exibir mensagem de erro ao submeter senha inválida', ()=> {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

})