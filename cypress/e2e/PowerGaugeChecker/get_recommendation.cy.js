describe('get current recommendation from website', () => {
    beforeEach(() => {
        cy.visit('https://app.chaikinanalytics.com/login/#/pulse-login');
    })

    it('login and get cookie', () => {
        cy.get('#exampleInputEmail1').type("justins.at@gmail.com");
        cy.log("I typed into the input field?");
    })

})
