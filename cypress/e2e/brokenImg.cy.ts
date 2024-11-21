import {BrokenImagePage} from "../../pages/BrokenImg"

let img: HTMLImageElement

describe('BROKEN IMAGE', () => {
    beforeEach(() => {
        cy.visit('/broken_images'); 
    });
    
    it('First broken img', () => {
        cy.get('div.example img')
        .first()
        .should('be.visible')
        .and((el)=>{
            img = el[0] as HTMLImageElement
            expect(img.naturalHeight,'Img Height: ').to.eq(0)
            expect(img.naturalWidth,'Img Width: ').to.eq(0)
        })
    });
});