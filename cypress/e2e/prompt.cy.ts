import {PromptPage} from '../../pages/Prompt'
describe('PROMPT', () => {
    beforeEach(() => {
        cy.visit('/javascript_alerts');
    }); 
    
    it('test prompt alert', () => {
        PromptPage.jsPrompt()
    });
});