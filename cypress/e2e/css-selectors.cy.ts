describe('Locators', () => {
    beforeEach('passes', () => {
      cy.visit("/dynamicid");
    });
    it("Cy.Contains Example", () => {
        cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID');
    });
    it('Cy.get + Cy.find example', () => {
        cy.get('div').find('button')
    });
    it('Css selector using an attribute', () => {
        cy.get(`button[class="btn btn-primary"]`).should('have.text', 'Button with Dynamic ID')
    });
});