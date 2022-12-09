Cypress.config("defaultCommandTimeout", 16000)
describe('Retry ability demo', () => {
    it('Visit with delay', () => {
        cy.visit('/loaddelay', { timeout: 30000 });
    });
    it.only("Client delay button", () => {
        cy.visit("/clientdelay");
        cy.get('#ajaxButton').click(0);
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.');
    });
});