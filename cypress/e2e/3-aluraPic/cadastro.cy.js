describe('Cadastro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifica mensagens de validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('bruno');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagens de nome de usuário com letra maiúscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Bruno');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
    
    it('registrar um novo usuário valido', () => {
        cy.cadastro('bruno@teste.com', 'Bruno Teste', 'brunooooooooohfd', 'password')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User available')
        });
    })

    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it(`registra um novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
})