describe.skip("Click challenge", () => {
    beforeEach(() => {
        cy.visit("/click");
    });
    it('class assertions', () => {
       cy.get("#badButton").click().should("have.class", "btn-success"); 
    });
    it('background assertions', () => {
        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)");        
    });
});


describe('Hover challenge', () => {
    beforeEach(() => {
        cy.visit("/mouseover");
    });
    it('Hover with cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover')
    });
    it('Hover with real hover elements', () => {
        cy.get('.text-primary').realHover();
    });
});