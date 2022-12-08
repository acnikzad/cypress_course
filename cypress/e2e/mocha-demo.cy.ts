describe('empty spec', () => {

    before(()=> {
        cy.log('hello from before the hook')
    });
    it('testcase #1', () => {
      cy.log("Hello World");
    });
    it('testcase #2', () => {
        cy.log("Hello World");
    });
    it('testcase #3', () => {
        cy.log("Hello World");
    });
  })