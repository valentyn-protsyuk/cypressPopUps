import {ConfirmPage} from '../../pages/Confirm'
describe('CONFIRM', () => {
    beforeEach(() => {
        cy.visit('/javascript_alerts');
    });
    
    it('confirm alert', () => {
        ConfirmPage.confirmAlert()
    });

    // it('cancel alert', () => {
    //     ConfirmPage.cancelAlert()
    // });
});