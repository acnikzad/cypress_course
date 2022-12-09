describe('Locators', () => {
    beforeEach(() => {
      cy.visit("/classattr");
    });

    it("How to find an element by its text", () => {
        cy.xpath(`//*[text()='Correct variant is']`).should('contain.text', 'Correct');
    });

    it("Find an element by its attribute using xpath", () => {
        cy.xpath(`//pre[@class=' language-html']`).should('contain.text', 'button');
    });

    it("Find by class (middle and spaces)", () => {
        cy.xpath(`//button[contains(concat(' ', @class, ' '), ' btn-warning ')]`
        ).should("have.css", "background-color", "rgb(255, 193, 7)");
    });


});