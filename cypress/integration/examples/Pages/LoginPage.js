// Page Object for Login Page
class LoginPage {

  // Open the login page
  visit() {
    cy.visit("https://practice.qabrains.com/");
  }

  // Email input field
  emailInput() {
    return cy.get("input[type='email']");
  }

  // Password input field
  passwordInput() {
    return cy.get("input[type='password']");
  }

  // Login button
  loginButton() {
    return cy.contains("button", "Login");
  }

  // Verify login success (adjust selector/text if needed)
  loginSuccess() {
    return cy.get("h2[class='text-xl font-oswald mb-3 uppercase not-odd:font-bold']")
             .should("be.visible");
  }

  loginFailed(){

    return cy.get(".title.text-black.text-md").should("be.visible");
  }

  // Perform login action
  login(email, password) {
    this.emailInput().clear().type(email);       // enter email
    this.passwordInput().clear().type(password); // enter password
    this.loginButton().click();                  // click login

 
  }

  // Navigate to Registration page
  goToRegistration() {
    cy.get("li[id='registration'] span[class='text flex-1']").click();
  }

  // Navigate to Forgot Password page
  goToForgotPassword() {
    cy.contains("Forgot Password").click();
  }
}

// ✅ Export instance (so you don’t need `new LoginPage()` everywhere)
export default new LoginPage();
