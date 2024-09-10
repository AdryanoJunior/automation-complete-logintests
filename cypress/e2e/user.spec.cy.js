import userData from '../fixtures/userData.json'

describe('Login - Sucess and Login - Fail Step by Step', () => {

const selectorsList = {
  usernameField: "[name='username']" ,
  passwordField: "[name='password']" ,
  loginButton: "[type='submit']" ,
  selectionTitleDashboard: '.oxd-topbar-header-breadcrumb-module' ,
  dashboardUpgrade: '.orangehrm-upgrade-layout' , 
  wrongCredentialAlert: "[role='alert']" ,
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]' ,
  firstNameField: "[name='firstName']" ,
  lastNameField: "[name='lastName']" ,
  dateField: (':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input') ,
  genericField: ".oxd-input" ,
  submitButton: "[type='submit']"
}

  beforeEach(() => {
    cy.visit('/auth/login') 
  });

  it.only('User Info Update - Sucess', () => {
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardUpgrade)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Cristiano')
    cy.get(selectorsList.lastNameField).clear().type('Ronaldo')
    cy.get(selectorsList.genericField).eq(4).clear().type('CR7')
    cy.get(selectorsList.genericField).eq(5).clear().type('ID2025')
    cy.get(selectorsList.genericField).eq(6).clear().type('01-01/2034')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  
  })
  it('Login - Fail', () => {
    cy.get("[name='username']").type(userData.userSuccess.username)
    cy.get("[name='password']").type(userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)
  });
})