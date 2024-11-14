import {AlertPage} from '../../pages/Alert'
describe('ALERT', () => {
  beforeEach(() => {
    cy.visit('/javascript_alerts');
  });

  it('Click for JS Alert', () => {
     AlertPage.triggerAlert();
  })
})