describe('basics', () => {
    beforeEach(() =>{
        cy.visit("/textinput");
    });
    it('visit explanation', () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`);
            expect(url).to.contains("/textinput");
        })
    });

    it("title validation", ()=> {
        cy.title().then((title)=>{
            cy.log(title);
            expect(title).to.be.equal("Text Input")
        })
    });
  })