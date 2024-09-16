import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js';
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login - Sucess and Login - Fail Step by Step', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
  });

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
})

