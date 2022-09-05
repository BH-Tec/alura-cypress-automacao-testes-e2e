describe('Usabilidade da página inicial', () => {

    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com/');
    })

    it('verifica mensagens na tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled')
    })
})