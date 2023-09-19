import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require ("../fixtures/endereco.json");


describe('Endereços de faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('login').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve cadastrar endereço de faturamento com sucesso', () => {
        EnderecoPage.editaEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});

