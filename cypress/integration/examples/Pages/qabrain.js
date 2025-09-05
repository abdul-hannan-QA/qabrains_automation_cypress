import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import FeedbackPage from "./FeedbackPage";


let testData;  // ✅ declare the variable first (notice capitalization)

describe("Authentication Tests for qabrains", function() {

  // Load test data before running tests
  before(function () {
    cy.fixture('example').then(function (data) {
      testData = data;  // ✅ assign fixture to declared variable
    });
  });

  it("Login with valid credentials", function () {
    LoginPage.visit();
    LoginPage.login(testData.users.valid.email, testData.users.valid.password);
    LoginPage.loginSuccess();
  });

  it("Login with invalid credentials", function () {
    LoginPage.visit();
    LoginPage.login(testData.users.invalid.email, testData.users.invalid.password);
    LoginPage.loginFailed();
  });


// REGISTRATION TESTS 
  it("Navigate to Registration, fill form and validate fields", function () {
    LoginPage.visit();
    LoginPage.goToRegistration();

    RegistrationPage.verifyLabels();
    //RegistrationPage.verifyPasswordMasking();

    // Fill text fields from JSON
    RegistrationPage.fillForm(testData.registration.valid);

    // Select dropdowns explicitly
    RegistrationPage.selectCountry("Bangladesh");
    RegistrationPage.selectAccountType("Engineer");

    // Submit form
    RegistrationPage.submit();
    RegistrationPage.verifySuccess();

    
  });

});
