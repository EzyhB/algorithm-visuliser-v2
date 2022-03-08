function visitPage() {
  cy.visit("http://localhost:3000/");

  cy.wait(500);

  cy.contains("Algorithms").click();

  cy.wait(500);

  cy.get("#1").click();

  cy.wait(1000);

  interactAlgorithm();
}

function interactAlgorithm() {
  cy.get("#binaryNewArr").click().click().click().click().click();

  cy.wait(500);

  cy.get("#binaryPickNum")
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()
    .click();

  cy.wait(500);

  cy.get("#binaryFindNum").click();

  recursiveCheck();
}

function recursiveCheck() {
  cy.get("li")
    .should("have.class", "AlgorithmArray_picked__ugrHo")
    .then(($li) => {
      if ($li.hasClass("AlgorithmArray_found__fqhVi")) {
        interactAlgorithm();
      } else {
        cy.wait(5000);
        recursiveCheck();
      }
    });
}

describe("Testing Binary Search", () => {
  it("should go to the linear search page and perform all functions", () => {
    visitPage();
  });
});
