class Alert {
   private alertBtn:string = 'button[onclick="jsAlert()"]'

   triggerAlert(){
    cy.get(this.alertBtn).click();
   }

   
}

export const AlertPage = new Alert();