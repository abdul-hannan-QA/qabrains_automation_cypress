class FormPage {

// Open the login page
  visit() {
    cy.visit("https://practice.qabrains.com/form-submission");
  }

 // Input fields
  nameInput() {
    return cy.get("#name");
  }

  EmailInput() {
    return cy.get("#email");
  }

ContactNumber() {
    return cy.get("#contact");
  }

  dateInput() {
    return cy.get("#date");
  }

  selectdateInput(){
    return cy.get("");
  }

 ColorInput() {
    return cy.get("label[for='Red']");
  }

 MenuInput() {
    return cy.get("label[for='Pizza']");
  }

country(){
    return cy.get("#country");
  }

  // Select dropdown values
  selectCountry(country) {
    cy.get('[name="country"]').select(country);
  }

  
 fileInput() {
  return cy.get("input[type='file']"); 
}


submitButton() {
    return cy.get("button[type='submit']");
  }
  

  verifySuccess() {
    
    cy.get('.success-msg > .text-xl').should("be.visible");
  }


fillForm(data) {
    if (data.name) this.nameInput().clear().type(data.name);
    if (data.email) this.EmailInput().clear().type(data.email);
    if (data.phone) this.ContactNumber().clear().type(data.phone);
    if (data.date) this.dateInput().clear().type(data.date); // <-- direct typing

    // ✅ Handle file upload if provided
  if (data.file) this.fileInput().attachFile(data.file);

  
  }




}



export default new FormPage();