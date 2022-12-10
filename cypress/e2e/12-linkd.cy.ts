describe('Dealing with links', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
    });
    it('First approach, not click the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    });
    it('Second approach, remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then((url) => {
            expect(url).to.be.eq("https://demoqa.com/");
        });
    });
});