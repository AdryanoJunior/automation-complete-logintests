describe('Login - Sucess and Login - Fail Step by Step', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  });

  it('Login - Sucess', () => {
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.get("[name='username']").type('Admin10')
    cy.get("[name='password']").type('admin456')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  });
})