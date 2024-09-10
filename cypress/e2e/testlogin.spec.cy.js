import userData from '../fixtures/userData.json'

describe('Login - Sucess and Login - Fail Step by Step', () => {

const selectorsList = {
  usernameField: "[name='username']" ,
  passwordField: "[name='password']" ,
  loginButton: "[type='submit']" ,
  selectionTitleDashboard: '.oxd-topbar-header-breadcrumb-module' ,
  dashboardUpgrade: '.orangehrm-upgrade-layout' , 
  wrongCredentialAlert: "[role='alert']"
}

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  });

  it('Login - Sucess', () => {
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardUpgrade)
  })
  it('Login - Fail', () => {
    cy.get("[name='username']").type(userData.userSuccess.username)
    cy.get("[name='password']").type(userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)
  });
})