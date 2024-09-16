import { faker } from "@faker-js/faker"

class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']" ,
            lastNameField: "[name='lastName']" ,
            genericField: ".oxd-input" ,
            nationatilityField: "[clear='false']" ,
            maritalField: "[tabindex='0']" ,
            submitButton: "[type='submit']" 
        }

        return selectors
    }

    addMyInfoPage() {
        cy.get(this.selectorsList().firstNameField).clear().type(faker.person.firstName())
        cy.get(this.selectorsList().lastNameField).clear().type(faker.person.lastName())
        cy.get(this.selectorsList().genericField).eq(4).clear().type(faker.internet.displayName())

        cy.get(this.selectorsList().genericField).eq(5).clear().type(faker.person.bio())
        cy.get(this.selectorsList().genericField).eq(6).clear().type('01-01/2034')
        cy.get(this.selectorsList().nationatilityField).eq(0).click()

        cy.get(':nth-child(6) > span').click()
        cy.get(this.selectorsList().maritalField).eq(1).click()
        cy.get(':nth-child(3) > span').click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        
    }

    checkChangesSuccess() {
        cy.get('.oxd-toast-content').should('be.visible')
    }
}

export default MyInfoPage