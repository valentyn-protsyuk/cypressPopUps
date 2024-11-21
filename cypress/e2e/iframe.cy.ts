import {IframePage} from "../../pages/Iframe"
describe('IFRAME', () => {
    beforeEach(() => {
        cy.visit('/iframe');
    }); 
    it('iframe test with extension', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(elIframe=>{
            cy.wrap(elIframe).type("{selectAll}{del}").type("Hello")
            //cy.wrap(elIframe).clear().type("Hello")
        })
    });
});