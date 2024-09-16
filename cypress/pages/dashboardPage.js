class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardFull: ".orangehrm-dashboard-grid" ,  
        }

        return selectors
    }

checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardFull).should('be.visible')
}

}


export default DashboardPage