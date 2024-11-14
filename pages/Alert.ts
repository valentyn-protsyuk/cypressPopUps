class Alert {

    //selectors
    private alertBtn: string = 'button[onclick="jsAlert()"]'
    private result: string = '#result'

    //data
    private alertText = 'I am a JS Alert'
    private resultText = 'You successfully clicked an alert'

    triggerAlert() {
        cy.get(this.alertBtn).click();

        cy.on("window:alert", (text) => {
            expect(text).to.equal(this.alertText)
        })

        cy.on("window:confirm", () => true)

        cy.get(this.result).should('have.text', this.resultText)

    }


}

export const AlertPage = new Alert();