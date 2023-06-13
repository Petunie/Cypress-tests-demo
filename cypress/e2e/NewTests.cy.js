/* BEFORE EACH HOOK CAN BE ADDED
describe('Navigation', () => {
beforeEach(() => {
 cy.visit('https://datoj23-the-cutest.herokuapp.com')
})
  it('navigation main page', () => {
    cy.get('h1').should('be.visible')

  })
   it('navigation prihlaseni', () => {
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
    })

})
*/
describe('Navigation', () => {
  it('navigation main page', () => {
    cy.visit('https://datoj23-the-cutest.herokuapp.com')
    cy.get('h1').should('be.visible')
  })
   it('navigation prihlaseni', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
    })
})
describe('Navigation', () => {
  it('navigation main page', () => {
    cy.visit('https://datoj23-the-cutest.herokuapp.com')
    cy.get('h1').should('be.visible')
//    cy.get('h1').should('have.value','Vyberte období akce')
  })
   it('navigation prihlaseni', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
    })
})
describe('Registration', () => {
   it('basic registration', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
      cy.get('#name').type('Arnold Rimmer')
      cy.get('#email').type('arnie@rd.com')
      cy.get('#password').type('SpalVojacky1')
      cy.get('#password-confirm').type('SpalVojacky1')
      cy.get('.btn').click()
    })
})
//GENERATING RANDOM DATA
import { random } from 'lodash';
let userName = `e2eTestUser${random(Number.MAX_SAFE_INTEGER)}`;
let email = `email${random(Number.MAX_SAFE_INTEGER)}@email.com`;
let heslo = `SpalVojacky1`;
describe('Registration', () => {
   it('basic registration', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
      cy.get('#name').type(userName)
      cy.get('#email').type(email)
      cy.get('#password').type(heslo)
      cy.get('#password-confirm').type(heslo)
      cy.get('.btn').click()
    })
   it('basic prihlaseni', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('h1').should('be.visible')
      cy.get('#email').type(email)
      cy.get('#password').type(heslo)
      cy.get('.btn-primary').click()
      //cy.get('.btn').click()
    })
})







