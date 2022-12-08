describe('basics', () => {
    beforeEach(() =>{
        cy.visit("/textinput");
    });
    it('visit explanation', () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`)
        })
    });
  })