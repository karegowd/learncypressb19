

describe("Test suite name", ()=>{

    before("before all", ()=>{

        cy.log("This will run Before ALL it blocks")
    })

    beforeEach("before Each", ()=>{

        cy.log("This will run Before Each It block")
    })

    afterEach("before Each", ()=>{

        cy.log("This will run After Each It block")
    })

    after("after all", ()=>{

        cy.log("This will run After ALL it blocks")
    })

    it("Test case 1 name", ()=>{

        cy.log("1st Test case")
    })

    it("Test case 2 name", ()=>{

        cy.log("2nd Test case")
    

    })

    it("Test case 3 name", ()=>{

        cy.log("3rd Test case")
    })

    it("Test case 4 name", ()=>{

        cy.log("4th Test case")
    })


})