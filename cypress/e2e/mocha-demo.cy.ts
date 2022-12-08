describe('empty spec', () => {

    before(()=> {
        cy.log('hello from before the hook')
    });
    after(()=> {
        cy.log('hello from after the hook')
    });
    beforeEach(()=> {
        cy.log('hello from beforeEach the hook')
    });
    it('testcase #1', () => {
      cy.log("Hello World");
    });
    it.skip('testcase #2', () => {
        cy.log("Hello World");
    });
    it.only('testcase #3', () => {
        cy.log("Hello World");
    });
  })