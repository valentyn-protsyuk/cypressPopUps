class Confirm {
    //selectors
    private confirmBtn:string = 'button[onclick="jsConfirm()"]'
    private result: string = '#result'

    //data
    private confirmText:string = 'I am a JS Confirm'
    private resultText: string = 'You clicked: Ok'


    confirmAlert(){
        cy.get(this.confirmBtn).click();
        cy.on("window:alert", (text) => {
            expect(text).to.equal(this.confirmText)
        })
        cy.on("window:confirm", () => true)
        cy.get(this.result).should('have.text', this.resultText)
    }

    // cancelAlert(){
    //     cy.get(this.confirmBtn).click();
    //     cy.on("window:alert", (text) => {
    //         expect(text).to.equal(this.confirmText)
    //     })
    //     cy.on("window:cancel", () => true)
    //     cy.get(this.result).should('have.text', this.resultText)
    // }

}

export const ConfirmPage = new Confirm();