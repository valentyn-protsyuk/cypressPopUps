class Prompt {
    //selectors
    private promptBtn:string = 'button[onclick="jsPrompt()"]'
    private result: string = '#result'

    //data
    private inputText:string = '123'
    private resultText: string = 'You entered: ' + this.inputText
    jsPrompt(){
        cy.window().then(window=>{
            cy.stub(window, "prompt").returns(this.inputText)
            cy.get(this.promptBtn).click()
        })
        cy.get(this.result).should('have.text', this.resultText)
    }
    
}
export const PromptPage = new Prompt();