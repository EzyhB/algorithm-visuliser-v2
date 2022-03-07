function visitPage() {
  cy.visit("http://localhost:3000/");

  cy.wait(500);

  cy.contains("Algorithms").click();

  cy.wait(500);

  cy.get("#0").click();

  cy.wait(1000);

  cy.get("#NewArrButt").click().click().click().click();

  cy.get("#PickNumButt").click().click().click().click();

  cy.wait(1000);

  cy.get("#FindNumButt").click();

  recursiveCheck();
}

function recursiveCheck() {
  cy.get("li")

    .should("have.class", "AlgorithmArray_picked__ugrHo")

    .then(($li) => {
      if ($li.hasClass("AlgorithmArray_found__fqhVi")) {
        visitPage();
      } else {
        cy.wait(2000);

        recursiveCheck();
      }
    });
}

describe("Testing Linear Search", () => {
  it("should go to the linear search page", () => {
    visitPage();
  });
});
