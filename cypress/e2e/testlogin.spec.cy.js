describe('Login - Sucess and Login - Fail Step by Step', () => {

const selectorsList = {
  usernameField: "[name='username']" ,
  passwordField: "[name='password']" ,
  loginButton: "[type='submit']" ,
  selectionTitleDashboard: '.oxd-topbar-header-breadcrumb-module' , 
  wrongCredentialAlert: "[role='alert']"
}

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  });

  it('Login - Sucess', () => {
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectionTitleDashboard).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.get("[name='username']").type('Admin10')
    cy.get("[name='password']").type('admin456')
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)
  });
})