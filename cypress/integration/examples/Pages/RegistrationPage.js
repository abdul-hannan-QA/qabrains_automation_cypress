class RegistrationPage {


verifyLabels() {
    cy.get("label[for='name']").should("contain.text", "Name");
    cy.get("label[for='email']").should("contain.text", "Email");
    cy.get("label[for='password']").should("contain.text", "Password");
    cy.get("label[for='confirm_password']").should("contain.text", "Confirm Password");

     cy.get("label[for='country']").should("contain.text", "Country");
    cy.get(':nth-child(3) > .form-label')

  }







  nameInput() {
    return cy.get("input[name='name']");
  }
  country(){
    return cy.get("#country");
  }
  accountType(){
    return cy.get("#account");
  }

  emailInput() {
    return cy.get("input[type='email']");
  }

  passwordInput() {
  return cy.get("#password"); // stable selector for password
}
  confirmPasswordInput() {
  return cy.get("#confirm_password"); // stable selector for confirm password
  }

  Signup() {
    return cy.get("button[type='submit']");
  }

  visit() {
    cy.visit("/register");
  }

  // Fill form (text fields only)
  fillForm(data) {
    if (data.name) this.nameInput().type(data.name);
    if (data.email) this.emailInput().type(data.email);
    if (data.password) this.passwordInput().type(data.password);
    //if (data.confirmPassword) this.confirmPasswordInput().type(data.confirmPassword);
    if (data.confirmPassword) {
    cy.get("#confirm_password").type(data.confirmPassword);
    }

  }

  // Select dropdown values
  selectCountry(country) {
    cy.get('[name="country"]').select(country);
  }

  selectAccountType(accountType) {
    //this.accountTypeSelect().select(accountType);
    cy.get('[name="account"]').select(accountType);
  }


  verifyPasswordMasking() {
  this.passwordInput().should("have.attr", "type", "password")
                       .and("have.attr", "autocomplete", "off");
  this.confirmPasswordInput().should("have.attr", "type", "password")
                             .and("have.attr", "autocomplete", "off");
}





  submit() {
    this.Signup().click();
  }


verifySuccess() {
    
    cy.get('.success-msg > .text-xl').should("be.visible");
  }

  verifyError() {
    cy.get(".error, .alert").should("be.visible");
  }


}

export default new RegistrationPage();
